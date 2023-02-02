import Button from '@/components/Button'
import HomeSearch from '@/components/HomeSearch'
import { BrandHorizontal, Github } from '@/components/Icons'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>YouFeel</title>
      </Head>
      <main className='flex flex-col'>
        <div className='home-bg-radial-gradient' />
        <div className='flex flex-col min-h-[calc(100vh-60px)]'>
          <header className='h-[80px] p-3 md:px-12 flex justify-end items-center'>
            <a href='https://github.com/emimudev/' target='_blank' rel='noreferrer'>
              <Button color='opaque' light rounded icon={<Github className='w-8 h-8' />} />
            </a>
          </header>
          <section className='flex container self-center p-3 flex-auto flex-col justify-center items-center'>
            <div className='max-w-lg w-full text-rose-400 mb-10'>
              <BrandHorizontal />
            </div>
            <div className='text-lg font-semibold mb-2 text-center'>
              YouTube sentiment analyzer
            </div>
            <div className='text-center'>
              See what users think about any content published
            </div>
            <div className='max-w-2xl w-full mt-5 pb-10'>
              <HomeSearch />
            </div>
          </section>
          {/* <div className='max-h-[250px] flex-initial overflow-hidden h-auto '>
            <svg className='text-rose-400' viewBox='0 0 1440 320'><path fill='currentColor' fill-opacity='1' d='M0,64L120,85.3C240,107,480,149,720,144C960,139,1200,85,1320,58.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z' /></svg>
          </div> */}
        </div>
        <footer className='flex justify-center min-h-60px] '>
          <span className='font-semibold hover:underline'>
            <a href='https://github.com/emimudev/' target='_blank' rel='noreferrer'>Developed by emimudev</a>
          </span>
        </footer>
        <style jsx>{`
          .home-bg-radial-gradient {
            position: absolute;
            inset: 0;
            z-index: -1;
            background: radial-gradient(circle at 0% -10%, hsl(0deg 46% 90%), rgba(255, 255, 255, 0) 40%),
            radial-gradient(circle at 110% 50%, hsl(288, 100%, 95%), transparent 30%),
            radial-gradient(circle at 50% 120%, hsl(0deg 46% 90%), transparent 30%),
            radial-gradient(circle at 100% 80%, hsl(0deg 46% 90%), rgba(255, 255, 255, 0) 30%);
          }
      `}</style>
      </main>
    </>
  )
}
