import { CohereAPI } from '@/services/CohereAPI'
import groupArray from 'group-array'
import { useEffect } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'
import Spinner from '../Spiner'
import { useCommentsContext } from '@/context/CommentsContext'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function StatisticsAI({ comments, videoId }) {
  const {
    classifiedComments,
    setClassifiedComments
  } = useCommentsContext()

  useEffect(() => {
    const savedClassifications = JSON.parse(sessionStorage.getItem(`${videoId}-classifications`))
    if (savedClassifications) {
      setClassifiedComments(savedClassifications)
    } else {
      const parseComments = comments.map(comment => comment.snippet.topLevelComment.snippet.textOriginal)
      CohereAPI.clasiffyComments({ comments: parseComments })
        .then(res => {
          sessionStorage.setItem(`${videoId}-classifications`, JSON.stringify(res.body.classifications))
          setClassifiedComments(res.body.classifications)
        })
    }
  }, [comments, setClassifiedComments, videoId])

  if (!classifiedComments || classifiedComments?.length === 0) {
    return (
      <div className='animate-pulse bg-blue-100 min-h-[350px] rounded-md flex items-center justify-center gap-3'>
        <Spinner size={['w-7', 'h-7']} color='opaque' />
        Generando...
      </div>
    )
  }

  const group = groupArray(classifiedComments, 'prediction')
  console.log({ classifiedComments, group })

  const data = {
    labels: ['Positivo', 'Tóxico', 'Racista', 'Neutral'],
    datasets: [
      {
        data: [group.positive?.length, group.toxic?.length, group.racist?.length, group.neutral?.length],
        backgroundColor: [
          'rgb(110, 231, 183)',
          'rgb(253, 164, 175)',
          'rgb(244, 114, 182)',
          'rgb(147, 197, 253)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <div className='flex w-auto items-center justify-center p-2 py-4 border-2 rounded-xl'>
      <div className='w-full max-w-[400px]'>
        <PolarArea data={data} />
      </div>
    </div>
  )
}
