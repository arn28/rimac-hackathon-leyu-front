interface IArrowLefttOutlineProps {
  strokeWidth?: number
  size?: number
  strokeColor?: string
}
export const ArrowLefttOutline = ({
  size,
  strokeWidth,
  strokeColor,
}: IArrowLefttOutlineProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      width={size || 16}
      height={size || 16}
      strokeWidth={strokeWidth || 1.5}
      className='size-6'
      stroke={strokeColor || 'currentColor'}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
      />
    </svg>
  )
}
