import prettyBigNumber from '@/utils/PrettyBigNumber'
import EyeIcon from '../Icons/EyeIcon'
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/outline'

export default function VideoStatistic({ count = 0, digits = 1, label, className = '', dislikes, likes, views }) {
  return (
    <div className={`flex items-center p-2 px-2.5 text-sm lg:p-3 lg:px-3.5 select-none gap-2 bg-slate-100 rounded-full ${className}`}>
      <span className='text-center flex items-center gap-2 '>
        {views && <EyeIcon className='h-4 w-4 lg:h-6 lg:w-6' />}
        {likes && <HandThumbUpIcon className='h-4 w-4 lg:h-6 lg:w-6' />}
        {dislikes && <HandThumbDownIcon className='h-4 w-4 lg:h-6 lg:w-6' />}
      </span>
      <div className='flex flex-col items-center text-right'>
        <span className='font-medium text-center w-full'>
          {prettyBigNumber(count, 1)}
        </span>
      </div>
    </div>
  )
}
