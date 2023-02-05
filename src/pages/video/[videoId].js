import PageLayout from '@/components/PageLayout'
import { useRouter } from 'next/router'

export default function VideoPage() {
  const router = useRouter()
  const { videoId } = router.query
  return <h1>{videoId}</h1>
}

VideoPage.getLayout = function getLayout(page) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}
