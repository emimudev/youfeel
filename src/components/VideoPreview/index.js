import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function VideoPreview({ idVideo, priority = false, idChannel, channelTitle, title, description, datePublished, thumbnail }) {
  const { url, width, height } = thumbnail
  // const [channel, setChannel] = useState(null)

  useEffect(() => {

  }, [])

  return (
    <Link href={`/video/${idVideo}`} className='hover:scale-[1.03] transition-transform'>
      <div className='group flex flex-col w-full overflow-hidden rounded-2xl gap-2'>
        <div className='before:block before:w-full before:pt-[56.25%] bg-black overflow-hidden relative rounded-2xl'>
          <Image priority={priority} className='group-hover:opacity-70 transition-opacity absolute top-0 object-cover w-full' src={url} width={width} height={height} alt={`profile picture of ${channelTitle}`} />
        </div>
        <div className='flex gap-2'>
          <div className='flex-[0_0_auto]'>
            <Image className='w-9 h-9 rounded-full' width={36} height={36} src={url} alt='Rounded avatar' />
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-sm line-clamp-2 xl:text-base group-hover:underline'>{title}</h3>
            <div className='lg:text-sm text-xs flex gap-1'>
              <span>{channelTitle}</span>
              <span>•</span>
              <span>{formatDistanceToNowStrict(parseISO(datePublished), { locale: es, includeSeconds: true })}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
