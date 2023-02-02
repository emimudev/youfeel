import Spinner from '../Spiner'

export default function Button({
  children,
  className = '',
  size = 'auto',
  isLoading = false,
  disabled = false,
  color = 'primary',
  rounded = false,
  flat = false,
  borderose = false,
  light = false,
  icon = null,
  rightIcon = null,
  shadow = false,
  ...props
}) {
  return (
    <button
      type='button'
      disabled={disabled}
      className={`
        flex items-center gap-2 justify-center disabled:cursor-not-allowed select-none font-medium
      disabled:text-[#9e9ea7] disabled:bg-[#fafafb] disabled:pointer-events-none
      text-white rounded-lg min-w-min outline-none focus-visible:shadow-[0_0_0_2px_white,_0_0_0_4px_rose] 
        active:scale-[0.97] w-auto ${SizeVariants[size]} ${rounded && 'rounded-full'}
        ${isLoading && 'pointer-events-none'} transition-colors 
        ${VariantColors[color]} ${flat && FlatVariants[color]} ${isLoading && LoadingVariants[color]}
        ${borderose && BorderoseVariants[color]} ${light && LightVariants[color]}
        ${((icon || rightIcon) && children == null) && '!px-2'}
        ${shadow && ShadowVariants[color]} 
        ${className}
      `}
      {...props}
    >
      {isLoading && <Spinner color={color} />}
      {icon}
      {children}
      {rightIcon}
    </button>
  )
}

const SizeVariants = {
  xs: 'h-6 text-xs p-1.5 min-w-[5rem]',
  sm: 'h-8 text-sm p-2.5 min-w-[9rem]',
  md: 'h-10 text-sm p-3.5 min-w-[12rem]',
  lg: 'h-12 text-base p-5 min-w-[15rem]',
  xl: 'h-14 text-lg p-5 min-w-[18rem]',
  auto: 'text-sm p-2 px-4'
}

const VariantColors = {
  primary: 'bg-rose-400 hover:bg-rose-300',
  secondary: 'bg-indigo-400 hover:bg-indigo-300',
  success: 'bg-emerald-400 hover:bg-emerald-300',
  warning: 'bg-orange-400 hover:bg-orange-300',
  error: 'bg-rose-400 hover:bg-rose-300',
  opaque: 'bg-slate-400 hover:bg-slate-300'
}

const LoadingVariants = {
  primary: 'bg-rose-300',
  secondary: 'bg-indigo-300',
  success: 'bg-emerald-300',
  warning: 'bg-orange-300',
  error: 'bg-rose-300',
  opaque: 'bg-slate-300'
}

const FlatVariants = {
  primary: 'bg-rose-200 text-rose-600 hover:bg-rose-300',
  secondary: 'bg-indigo-200 text-indigo-600 hover:bg-indigo-300',
  success: 'bg-emerald-200 text-emerald-600 hover:bg-emerald-300',
  warning: 'bg-orange-200 text-orange-600 hover:bg-orange-300',
  error: 'bg-rose-200 text-rose-600 hover:bg-rose-300',
  opaque: 'bg-slate-200 text-slate-500 hover:bg-slate-300'
}

const BorderoseVariants = {
  primary: 'bg-transparent text-rose-600 hover:bg-rose-100 border-rose-500 border-2',
  secondary: 'bg-transparent text-indigo-600 hover:bg-indigo-100 border-indigo-500 border-2',
  success: 'bg-transparent text-emerald-600 hover:bg-emerald-100 border-emerald-500 border-2',
  warning: 'bg-transparent text-orange-600 hover:bg-orange-100 border-orange-500 border-2',
  error: 'bg-transparent text-rose-600 hover:bg-rose-100 border-rose-500 border-2',
  opaque: 'bg-transparent text-slate-600 hover:bg-slate-100 border-slate-500 border-2'
}

const LightVariants = {
  primary: 'bg-transparent text-rose-500 hover:text-rose-700 hover:bg-rose-100',
  secondary: 'bg-transparent text-indigo-500 hover:text-indigo-700 hover:bg-indigo-100',
  success: 'bg-transparent text-emerald-500 hover:text-emerald-700 hover:bg-emerald-100',
  warning: 'bg-transparent text-orange-500 hover:text-orange-700 hover:bg-orange-100',
  error: 'bg-transparent text-rose-500 hover:text-rose-700 hover:bg-rose-100',
  opaque: 'bg-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100'
}

const ShadowVariants = {
  primary: 'hover:shadow-lg hover:shadow-rose-500/50',
  secondary: 'hover:shadow-lg hover:shadow-indigo-500/50',
  success: 'hover:shadow-lg hover:shadow-emerald-500/50',
  warning: 'hover:shadow-lg hover:shadow-orange-500/50',
  error: 'hover:shadow-lg hover:shadow-rose-500/50',
  opaque: 'hover:shadow-lg hover:shadow-slate-500/50'
}
