export default function LikesComparisonBar({ dislikePercentaje = 0 }) {
  return (
    <div className='w-full h-1.5 bg-blue-300 relative rounded-lg'>
      <div className='h-1.5 absolute top-0 left-0 bg-red-300' style={{ width: `${dislikePercentaje}%` }} />
    </div>
  )
}
