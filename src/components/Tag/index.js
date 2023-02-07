export default function Tag({ icon, children, className = '' }) {
  return (
    <div
      className={`text-[10px] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 rounded-full bg-white text-gray-700 border ${className}`}
    >
      {icon}
      {children}
    </div>
  )
}
