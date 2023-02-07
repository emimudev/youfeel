// import YoutubeAPI from '@/services/YoutubeAPI'
import Alert from '@/components/Alert'
import PageLayout from '@/components/PageLayout'
import VideoPreview from '@/components/VideoPreview'
import json from '@/services/localDB.json'
import YoutubeAPI from '@/services/YoutubeAPI'

export default function SearchPage({ searchResult, isOverloaded }) {
  // const { items: videos, nextPageToken, pageInfo } = searchResult
  const { items: videos } = searchResult
  // const { totalResults, resultsPerPage } = pageInfo
  return (
    <>
      {isOverloaded && (
        <Alert variant='danger' className='lg:sticky top-[60px] z-[5] bg-opacity-[0.97] rounded-none line-clamp-4 text-xs'>
          Lo sentimos, <strong className='text-inherit'>se ha excedido el límite diario permitido de llamadas a la API de Youtube</strong>. Los resultados de búsqueda que estás viendo han sido almacenados previamente para garantizar el funcionamiento de la aplicación.
        </Alert>
      )}
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
    </>
  )
}

export async function getServerSideProps(context) {
  const { querySearch } = context.query
  let searchResult = null
  let isOverloaded = false
  try {
    searchResult = await YoutubeAPI.search({ type: 'video', maxResults: 50, query: querySearch })
  } catch (error) {
    searchResult = json
    isOverloaded = true
  }
  return {
    props: {
      searchResult,
      isOverloaded
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
