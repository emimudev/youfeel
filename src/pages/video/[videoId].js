import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import YoutubeAPI from '@/services/YoutubeAPI'
import VideoDescription from '@/components/VideoDescription'
import RelatedVideos from '@/components/RelatedVideos'
import VideoStatistic from '@/components/VideoStatistic'
import LikesComparisonBar from '@/components/LikesComparisonBar'
import Tag from '@/components/Tag'
import TagsCollapse from '@/components/TagsCollapse'

export default function VideoPage({ pageInfo, videoId, relatedVideosInfo }) {
  const videoInfo = pageInfo.items[0]
  console.log({ videoInfo })
  const { statistics, snippet } = videoInfo
  const { thumbnails, description, title, channelTitle, tags } = snippet
  const { default: defaultSize } = thumbnails
  const { items: relatedVideos } = relatedVideosInfo
  console.log({ statistics })
  const { likeCount, dislikes, viewCount } = statistics
  const totalVotes = +likeCount + +dislikes
  return (
    <div className='flex p-3 flex-col md:p-6 '>
      <div className='flex flex-wrap md:flex-nowrap gap-6'>
        <div className='flex flex-col w-full max-w-full lg:max-w-[70vw] gap-3.5 overflow-hidden'>
          <iframe
            className='aspect-video w-full rounded-lg'
            src={`//www.youtube.com/embed/${videoId}?rel=0?version=3&autoplay=1`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
          <div className='flex flex-col gap-2'>
            <h1 className='lg:text-xl font-medium line-clamp-2'>
              {title}
            </h1>
            <div className='flex flex-wrap gap-2 items-center justify-between'>
              <div className='flex gap-2 p-2 px-2.5 bg-slate-100 rounded-xl'>
                <Image
                  className='w-10 h-10 rounded-full'
                  width={defaultSize.width}
                  height={defaultSize.height}
                  src={defaultSize.url}
                  alt={channelTitle}
                />
                <span className='text-lg self-center'>
                  {channelTitle}
                </span>
              </div>
              <div className='flex flex-wrap gap-1 items-center'>
                <VideoStatistic views label='Vistas' count={viewCount} />
                <VideoStatistic likes label='Likes' count={likeCount} />
                <VideoStatistic dislikes label='Dislikes' count={dislikes} />
              </div>
            </div>
            <LikesComparisonBar dislikePercentaje={(dislikes / totalVotes) * 100} />
            <TagsCollapse tags={tags} />
            <VideoDescription description={description} />
          </div>
          <div>
            comments
          </div>
        </div>
        <RelatedVideos videos={relatedVideos} />
      </div>
      {videoId}
    </div>
  )
}

VideoPage.getLayout = function getLayout(page) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}

export async function getServerSideProps(context) {
  const { videoId } = context.query
  const [
    pageInfo,
    relatedVideos,
    dislikesInfo
  ] = await Promise.allSettled([
    YoutubeAPI.video({ videoId }),
    YoutubeAPI.relatedVideos({ videoId }),
    YoutubeAPI.dislikes({ videoId })
  ])
  if (pageInfo.status === 'fulfilled') {
    pageInfo.value.items[0].statistics.dislikes = dislikesInfo.value?.dislikes
    pageInfo.value.items[0].statistics.rating = dislikesInfo.value?.rating
  }
  return {
    props: {
      videoId,
      pageInfo: pageInfo.value,
      relatedVideosInfo: relatedVideos.value
    }
  }
}
