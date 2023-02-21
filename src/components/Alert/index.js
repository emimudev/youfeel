export default function Alert({ variant = 'info', children, className = '', ...props }) {
  const variantColor = VariantColors[variant] || VariantColors.info
  return (
    <div className={`p-2 text-sm rounded-lg ${variantColor} ${className}`} role='alert' {...props}>
      {children}
    </div>
  )
}

const VariantColors = {
  info: 'text-blue-800 bg-blue-100',
  danger: 'text-red-800 bg-red-100',
  success: 'text-green-800 bg-green-100',
  warning: 'text-yellow-800 bg-yellow-100',
  dark: 'text-gray-800 bg-gray-100'
}
