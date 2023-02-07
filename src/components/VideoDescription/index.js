import { useState } from 'react'

export default function VideoDescription({ description }) {
  const [isCollapse, setIsCollapse] = useState(false)
  const toggleCollapse = () => setIsCollapse((state) => !state)
  return (
    <div
      onClick={toggleCollapse}
      className='p-3 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer text-sm'
    >
      <div
        className={!isCollapse ? 'line-clamp-3' : 'line-clamp-none'}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}
