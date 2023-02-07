import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'
import { useState } from 'react'

export default function Comment({ snippet }) {
  const [isCollapse, setIsCollapse] = useState(true)
  const { topLevelComment, totalReplyCount } = snippet
  const { authorDisplayName, likeCount, publishedAt, textDisplay, authorProfileImageUrl } = topLevelComment.snippet
  const toggleCollapse = () => setIsCollapse(prev => !prev)
  return (
    <div className='flex gap-4'>
      <div className='h-10 flex-[0_0_auto] w-10 overflow-hidden relative rounded-full'>
        <Image
          src={authorProfileImageUrl}
          fill
          alt={`Profile photo of ${authorDisplayName} YoutubeChannel`}
          className='absolute top-0 left-0 bottom-0 right-0'
          draggable='false'
        />
      </div>
      <div
        onClickCapture={toggleCollapse}
        className='flex flex-col hover:bg-slate-100 flex-auto p-2 rounded-lg rounded-tl-none relative cursor-pointer'
      >
        <div className='absolute w-4 h-4 bg-inherit top-[-5px] left-[-11px] origin-bottom-left rotate-45' />
        <div className='flex items-center gap-2'>
          <span className='font-medium'>
            {authorDisplayName}
          </span>
          <span className='text-sm'>
            - hace {formatDistanceToNowStrict(parseISO(publishedAt), { locale: es, includeSeconds: true })}
          </span>
        </div>
        <div
          className={`video-comment-text text-sm ${isCollapse ? 'line-clamp-4' : 'line-clamp-none'}`}
          dangerouslySetInnerHTML={{ __html: highlightMentions(textDisplay).join('') }}
        />
        <div className='flex mt-2 gap-5 items-center text-sm'>
          <span>
            {totalReplyCount}
            {parseInt(totalReplyCount) === 1 ? ' respuesta' : ' respuestas'}
          </span>
          <span className='flex gap-2 items-center'>
            <HandThumbUpIcon className='h-4 w-4' />
            <span>{likeCount}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

const highlightMentions = text => {
  const words = text.split(' ')
  return words.map(word => {
    if (word[0] === '@') {
      return (
        `<span style='color: #60A5FA;'>
            ${word}
          </span>`
      )
    }
    return word + ' '
  })
}
