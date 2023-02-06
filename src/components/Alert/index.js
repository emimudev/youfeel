export default function Alert({ variant = 'info', children, className = '', ...props }) {
  const variantColor = VariantColors[variant] || VariantColors.info
  return (
    <div className={`p-2 text-sm rounded-lg ${variantColor} ${className}`} role='alert' {...props}>
      {children}
    </div>
  )
}

const VariantColors = {
  info: 'text-blue-800 bg-blue-100 dark:bg-gray-800 dark:text-blue-400',
  danger: 'text-red-800 bg-red-100 dark:bg-gray-800 dark:text-red-400',
  success: 'text-green-800 bg-green-100 dark:bg-gray-800 dark:text-green-400',
  warning: 'text-yellow-800 bg-yellow-100 dark:bg-gray-800 dark:text-yellow-300',
  dark: 'text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-300'
}
