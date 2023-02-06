import { useState } from 'react'
import Tag from '../Tag'

export default function TagsCollapse({ tags }) {
  const [isCollapse, setIsCollapse] = useState(false)

  if (!tags || tags.length === 0) return null

  return (
    <div onClick={() => setIsCollapse(p => !p)} className={`flex overflow-hidden ${!isCollapse ? 'max-h-[56px]' : 'max-h-fit'}`}>
      <div className='flex flex-auto flex-wrap gap-1 select-none'>
        {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </div>
    </div>
  )
}
