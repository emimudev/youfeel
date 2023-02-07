import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'

export default function RelatedVideos({ videos = [] }) {
  return (
    <div className='flex-auto flex flex-col md:w-[420px] overflow-hidden'>
      {videos.map((video) => {
        const { videoId } = video.id
        const { thumbnails, title, channelTitle, publishedAt } = video.snippet
        return (
          <Link className='group active:bg-slate-100 p-2 rounded-lg' href={`/video/${videoId}`} key={videoId}>
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
                  {channelTitle} • {formatDistanceToNowStrict(parseISO(publishedAt), { locale: es, includeSeconds: true })}
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
