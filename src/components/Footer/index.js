import { Github } from '../Icons'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center py-5 px-3 '>
      <span className='font-semibold text-sm flex flex-col justify-center items-center gap-1'>
        <Github className='w-14 h-14 text-gray-500' />
        <a href='https://github.com/emimudev/youfeel' className='hover:underline' target='_blank' rel='noreferrer'>
          Developed by emimudev
        </a>
      </span>
    </footer>
  )
}
