interface IArrowRightOutlineProps {
  strokeWidth?: number
  size?: number
  strokeColor?: string
}
export const ArrowRightOutline = ({
  size,
  strokeWidth,
  strokeColor,
}: IArrowRightOutlineProps) => {
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
        d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
      />
    </svg>
  )
}
