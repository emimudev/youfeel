import Button from '../Button'
import Search from '../Icons/Search'

export default function HomeSearch() {
  return (
    <form class='flex items-center' autoComplete='off'>
      <label for='voice-search' class='sr-only'>Search</label>
      <div class='relative w-full'>
        <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg aria-hidden='true' class='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20'><path fill-rule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clip-rule='evenodd' /></svg>
        </div>
        <input type='text' id='voice-search' class='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 h-[60px] focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search videos or channels...' required />
      </div>
      <Button shadow type='submit' size='auto' className='ml-2 py-2.5 h-[60px]' icon={<Search className='w-5 h-5' />}>
        Search
      </Button>
    </form>
  )
}
