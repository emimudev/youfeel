export default function LikesComparisonBar({ dislikePercentaje = 0 }) {
  return (
    <div className='w-full h-1 bg-green-300 relative'>
      <div className='h-1 absolute top-0 left-0 bg-red-300' style={{ width: `${dislikePercentaje}%` }} />
    </div>
  )
}
