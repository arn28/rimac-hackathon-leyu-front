interface IArrowDownOutlineProps {
  strokeWidth?: number
  size?: number
  strokeColor?: string
}
export const ArrowDownOutline = ({
  size,
  strokeWidth,
  strokeColor,
}: IArrowDownOutlineProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth || 1.5}
      stroke={strokeColor || 'currentColor'}
      width={size || 16}
      height={size || 16}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m19.5 8.25-7.5 7.5-7.5-7.5'
      />
    </svg>
  )
}
