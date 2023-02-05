import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../Button'
import Search from '../Icons/Search'

export default function HomeSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (query.length === 0) return
    router.push(`/search/${query}`)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <form className='flex items-center' autoComplete='off' onSubmit={handleSubmit}>
      <label htmlFor='voice-search' className='sr-only'>Search</label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
        </div>
        <input type='text' id='voice-search' onChange={handleChange} value={query} className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 h-[60px] focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search videos or channels...' required />
      </div>
      <Button type='submit' shadow size='auto' className='ml-2 py-2.5 h-[60px]' icon={<Search className='w-5 h-5' />}>
        Search
      </Button>
    </form>
  )
}
