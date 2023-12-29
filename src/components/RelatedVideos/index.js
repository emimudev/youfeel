import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import Alert from '../Alert'
import Button from '../Button'

export default function RelatedVideos({ videos = [] }) {
  return (
    <div className='flex-auto flex flex-col md:w-[420px]'>
      {(!videos || videos.length === 0) && (
        <div className='sticky top-[80px]'>
          <Alert variant='danger'>
            <p className='font-semibold mb-3'>
              No se encontraron videos relacionados
            </p>
            <p className='text-sm mb-3'>
              Aquí deberían mostrarse videos relacionados. Sin embargo, la API
              de Youtube dejó de soportar esta funcionalidad a partir del 7 de
              agosto de 2023.
            </p>
            <Button
              size='xs'
              as='a'
              href='https://developers.google.com/youtube/v3/revision_history#august-7,-2023'
              target='_blank'
              rel='noopener noreferrer'
            >
              Más información
            </Button>
          </Alert>
        </div>
      )}
      {videos.map((video) => {
        const { videoId } = video.id
        const { thumbnails, title, channelTitle, publishedAt } = video.snippet
        return (
          <Link
            className='group active:bg-slate-100 p-2 rounded-lg'
            href={`/video/${videoId}`}
            key={videoId}
          >
            <div className='flex gap-3'>
              <div className='h-[94px] w-[168px] bg-slate-800 transition-opacity rounded-md overflow-hidden flex-[0_0_auto] relative'>
                <Image
                  className='absolute top-0 left-0 right-0 bottom-0 group-hover:opacity-80'
                  src={thumbnails.medium.url}
                  height={thumbnails.medium.height}
                  width={thumbnails.medium.width}
                  alt='asd'
                  draggable={false}
                />
              </div>
              <div className='flex flex-col gap-1 flex-[1_1_auto] overflow-hidden'>
                <span className='font-medium line-clamp-2 leading-5 group-hover:underline'>
                  {title}
                </span>
                <span className='text-sm'>
                  {channelTitle} •{' '}
                  {formatDistanceToNowStrict(parseISO(publishedAt), {
                    locale: es,
                    includeSeconds: true
                  })}
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
