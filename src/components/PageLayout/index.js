import Header from '../Header'
import Footer from '../Footer'

export default function PageLayout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='h-full flex-1 min-h-[400px]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
