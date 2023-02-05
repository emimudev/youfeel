// import YoutubeAPI from '@/services/YoutubeAPI'
import PageLayout from '@/components/PageLayout'
import VideoPreview from '@/components/VideoPreview'
import json from '@/services/localDB.json'

export default function SearchPage({ searchResult }) {
  // const { items: videos, nextPageToken, pageInfo } = searchResult
  const { items: videos } = searchResult
  // const { totalResults, resultsPerPage } = pageInfo
  console.log(searchResult)
  return (
    <div className='p-3 sm:p-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7'>
      {videos.map((video, index) => {
        const { id: { videoId }, snippet } = video
        const { publishedAt, title, description, thumbnails, channelTitle, channelId } = snippet
        const { medium: thumbnail } = thumbnails
        return (
          <VideoPreview
            priority={index <= 4}
            key={videoId}
            idVideo={videoId}
            idChannel={channelId}
            channelTitle={channelTitle}
            title={title}
            description={description}
            thumbnail={thumbnail}
            datePublished={publishedAt}
          />
        )
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  // const { querySearch } = context.query
  let searchResult = null
  try {
    throw new Error()
    // searchResult = await YoutubeAPI.search({ type: 'video', maxResults: 50, query: querySearch })
  } catch (error) {
    searchResult = json
  }
  return {
    props: {
      searchResult
    }
  }
}

SearchPage.getLayout = function getLayout(page) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}
