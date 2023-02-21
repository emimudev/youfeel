import getYoutubeVideoId from '@/utils/getYoutubeVideoId'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Button from '../Button'
import Search from '../Icons/Search'

export default function HomeSearch() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    const videoId = getYoutubeVideoId(query)
    if (videoId) {
      router.push(`/video/${videoId}`)
    } else {
      query.length > 0 && router.push(`/search/${query}`)
    }
  }

  const handleChange = (event) => {
    event.preventDefault()
    setQuery(event.target.value)
  }

  const handlePaste = event => {
    setQuery(query + event.clipboardData.getData('text'))
    event.preventDefault()
  }

  return (
    <form className='flex items-center sm:flex-row flex-col gap-2 w-full' autoComplete='off' onSubmit={handleSubmit}>
      <label htmlFor='voice-search' className='sr-only'>Search</label>
      <div className='relative w-full '>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg aria-hidden='true' className='w-5 h-5 text-gray-500' fill='currentColor' viewBox='0 0 20 20'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
        </div>
        <input
          onPaste={handlePaste}
          onChange={handleChange}
          value={query}
          className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 h-[60px] focus:border-blue-500 block w-full pl-10 p-2.5'
          placeholder='Buscar videos, canales, URL...'
          required
        />
      </div>
      <Button
        type='submit'
        shadow
        size='sm'
        className='sm:py-2.5 sm:h-[60px] w-[100%] flex-1'
        icon={<Search className='w-5 h-5' />}
      >
        Buscar
      </Button>
    </form>
  )
}
