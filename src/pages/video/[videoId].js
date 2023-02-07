import Image from 'next/image'
import PageLayout from '@/components/PageLayout'
import YoutubeAPI from '@/services/YoutubeAPI'
import VideoDescription from '@/components/VideoDescription'
import RelatedVideos from '@/components/RelatedVideos'
import VideoStatistic from '@/components/VideoStatistic'
import LikesComparisonBar from '@/components/LikesComparisonBar'
import TagsCollapse from '@/components/TagsCollapse'
import CommentList from '@/components/CommentList'
import StatisticsAI from '@/components/StatisticsAI'
import CommentsContextProvider from '@/context/CommentsContext'
import Alert from '@/components/Alert'

export default function VideoPage({ pageInfo, videoId, relatedVideosInfo, commentsInfo }) {
  const videoInfo = pageInfo.items[0]
  const { statistics, snippet } = videoInfo
  const { thumbnails, description, title, channelTitle, tags } = snippet
  const { default: defaultSize } = thumbnails
  const { items: relatedVideos } = relatedVideosInfo
  const { likeCount, dislikes, viewCount } = statistics
  const totalVotes = +likeCount + dislikes
  const { items: comments } = commentsInfo

  return (
    <div className='flex p-3 flex-col md:p-6 lg:px-16 '>
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
                <VideoStatistic className='text-blue-700' likes label='Likes' count={likeCount} />
                <VideoStatistic className='text-red-700' dislikes label='Dislikes' count={dislikes} />
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <LikesComparisonBar dislikePercentaje={(dislikes / totalVotes) * 100} />
              <TagsCollapse tags={tags} />
              <VideoDescription description={description} />
            </div>
          </div>
          <CommentsContextProvider>
            <div className='flex flex-col gap-3'>
              <span className='font-medium'>
                Análisis de sentimientos
              </span>
              <Alert variant='info'>
                El análisis se ha limitado a un máximo de <strong>95 comentarios</strong> para evitar exceder el consumo gratuito de la cuota de la API de YouTube.
              </Alert>
              <StatisticsAI comments={comments} videoId={videoId} />
              <span className='font-medium'>
                Comentarios - {commentsInfo.pageInfo.totalResults}
              </span>
              <CommentList comments={comments} />
            </div>
          </CommentsContextProvider>
        </div>
        <RelatedVideos videos={relatedVideos} />
      </div>
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
    dislikesInfo,
    commentsInfo
  ] = await Promise.allSettled([
    YoutubeAPI.video({ videoId }),
    YoutubeAPI.relatedVideos({ videoId }),
    YoutubeAPI.dislikes({ videoId }),
    YoutubeAPI.comments({ videoId, maxResults: 95 })
  ])
  if (pageInfo.status === 'fulfilled') {
    pageInfo.value.items[0].statistics.dislikes = dislikesInfo.value?.dislikes
    pageInfo.value.items[0].statistics.rating = dislikesInfo.value?.rating
  }
  console.log({ pageInfo, relatedVideos })
  return {
    props: {
      videoId,
      pageInfo: pageInfo.value,
      relatedVideosInfo: relatedVideos.value,
      commentsInfo: commentsInfo.value
    }
  }
}
