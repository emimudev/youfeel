export default function Tag({ icon, children }) {
  return (
    <div
      class='text-[10px] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 rounded-full bg-white text-gray-700 border'
    >
      {icon}
      {children}
    </div>
  )
}
