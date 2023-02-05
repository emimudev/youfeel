import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../Button'
import { BrandHorizontal } from '../Icons'

export default function Header() {
  return (
    <div className='min-h-[60px] h-[60px] flex items-center shadow-md sticky z-10 bg-white top-0 px-3 lg:px-6 gap-3'>
      <div className='flex items-center flex-initial'>
        <Link href='/'>
          <BrandHorizontal className='h-[40px] text-rose-400' />
        </Link>
      </div>
      <div className='flex justify-center items-center flex-1'>
        <div className='flex relative w-full max-w-[700px] max-h-[35px]'>
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

function SearchForm() {
  const router = useRouter()
  const { querySearch } = router.query
  const [text, setText] = useState(querySearch)
  const handleChange = (event) => setText(event.target.value)
  const handleSubmit = (event) => {
    event.preventDefault()
    text.length > 0 && router.push(text)
  }
  return (
    <form onSubmit={handleSubmit} className='flex w-full'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
      </div>
      <input
        type='search'
        value={text}
        onChange={handleChange}
        placeholder='Search videos or channels...'
        className='pl-10 outline-none block rounded-tr-none rounded-br-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 border-2 focus:ring-rose-400 focus:border-rose-400 border-r-0'
      />
      <Button
        type='submit'
        className='rounded-r-lg rounded-tl-none rounded-bl-none'
        icon={<svg aria-hidden='true' className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /></svg>}
      />
    </form>
  )
}
