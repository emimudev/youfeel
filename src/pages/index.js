import Button from '@/components/Button'
import HomeSearch from '@/components/HomeSearch'
import { BrandHorizontal, Github } from '@/components/Icons'
import Tag from '@/components/Tag'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>YouFeel</title>
      </Head>
      <main className='flex flex-col relative'>
        <div className='home-bg-radial-gradient' />
        <div className='flex flex-col min-h-[calc(100vh-60px)]'>
          <header className='h-[80px] p-3 md:px-12 flex justify-end items-center'>
            <a href='https://github.com/emimudev/youfeel' target='_blank' rel='noreferrer'>
              <Button color='opaque' light rounded icon={<Github className='w-8 h-8' />} />
            </a>
          </header>
          <section className='flex container self-center p-3 flex-auto flex-col justify-center items-center px-5'>
            <div className='max-w-lg w-full text-rose-400 mb-10 px-4'>
              <BrandHorizontal />
            </div>
            <div className='text-base sm:text-lg font-semibold mb-2 text-center'>
              YouTube Sentiment Analyzer
            </div>
            <div className='text-xs sm:text-base text-center pb-4'>
              Observa lo que los usuarios piensan sobre cualquier contenido publicado en YouTube
            </div>
            <div className='max-w-2xl w-full mt-5 pb-6 flex flex-col'>
              <HomeSearch />
              <span className='text-xs text-gray-400 mt-1 hidden sm:block'>
                Es posible buscar un video en específico pegando la URL del video
              </span>
            </div>
            <div className='flex gap-3 mt-6 flex-wrap'>
              <div className='px-4 py-4 border-2 rounded-lg text-sm hover:shadow-lg flex-1 md:flex-auto'>
                Visualización de dislikes
              </div>
              <div className='px-4 py-4 border-2 rounded-lg text-sm hover:shadow-lg flex-1 md:flex-auto'>
                Clasificación de comentarios
              </div>
              <div className='px-4 py-4 border-2 rounded-lg text-sm hover:shadow-lg flex-1 md:flex-auto hidden sm:block'>
                Representaciones gráficas
              </div>
            </div>
          </section>
        </div>
        <footer className='max-w-3xl p-3 w-full m-auto flex justify-between min-h-60px] flex-wrap gap-1'>
          <Tag className='normal-case'>
            <a href='https://github.com/topics/midudev-cohere-2023' target='_blank' rel='noreferrer'>
              #midudev-cohere-2023
            </a>
          </Tag>
          <Tag className='normal-case'>
            <a href='https://github.com/emimudev/' target='_blank' rel='noreferrer'>developed by emimudev</a>
          </Tag>
          <span className='text-sm self-center m-auto sm:m-0'>
            Powered by <Tag className='normal-case'><a href='https://vercel.com/' target='_blank' rel='noreferrer'>Vercel</a></Tag> and <Tag className='normal-case'> <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>co:here</a></Tag>
          </span>
        </footer>
        <style jsx>{`
          .home-bg-radial-gradient {
            position: absolute;
            z-index: -1;
            min-height: 100vh;
            height: 100%;
            width: 100%;
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
