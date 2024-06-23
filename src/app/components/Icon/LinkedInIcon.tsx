interface ILinkedInIconProp {
  size?: number
  bgColor?: string
  strokeColor?: string
}
export const LinkedInIcon = ({
  size,
  bgColor,
  strokeColor,
}: ILinkedInIconProp) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='12' fill={bgColor || '#03050F'} />
      <mask
        id='mask0_48_5599'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='5'
        y='5'
        width='14'
        height='14'
      >
        <rect
          x='5.25'
          y='5.25'
          width='13.5'
          height='13.5'
          fill={strokeColor || 'white'}
        />
      </mask>
      <g mask='url(#mask0_48_5599)'>
        <mask
          id='mask1_48_5599'
          // style='mask-type:alpha'
          maskUnits='userSpaceOnUse'
          x='6'
          y='6'
          width='12'
          height='12'
        >
          <rect
            x='6.59998'
            y='6.59961'
            width='10.8'
            height='10.8'
            fill={strokeColor || 'white'}
          />
        </mask>
        <g mask='url(#mask1_48_5599)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M6.77476 10.1857H9.01476V17.3996H6.77476V10.1857ZM7.89901 6.59961C8.61515 6.59961 9.19805 7.18339 9.19805 7.90061C9.19805 8.61783 8.61515 9.20161 7.89901 9.20161C7.17871 9.20161 6.59998 8.61783 6.59998 7.90061C6.59998 7.18339 7.17871 6.59961 7.89901 6.59961Z'
            fill='white'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M10.4218 10.1857H12.5661V11.174H12.5952C12.895 10.6069 13.6236 10.0106 14.7145 10.0106C16.9795 10.0106 17.4 11.5034 17.4 13.4465V17.3996H15.1641V13.8927C15.1641 13.0546 15.1516 11.9788 14.0025 11.9788C12.8367 11.9788 12.6618 12.892 12.6618 13.8302V17.3996H10.426V10.1857H10.4218Z'
            fill='white'
          />
        </g>
      </g>
    </svg>
  )
}
