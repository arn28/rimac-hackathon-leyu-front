import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|image|ripple|spinner).js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13172C',
        default: { DEFAULT: '#111', foreground: '#fff' },
        'lila':'#EDF0FF'
      },
      height: {
        '80vh': '80vh',
      },
      borderColor: {
        'input' : '#CCD1EE'
      },
      animation:{
        'trans0_5': 'transition ease 0.5s'
      }
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        // disabledOpacity: '0.3', // opacity-[0.3]
        radius: {
          small: '2px', // rounded-small
          medium: '4px', // rounded-medium
          large: '8px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '1px', // border-medium
          large: '2px', // border-large
        },
      },
      themes: {
        light: {},
        dark: {},
      },
    }),
  ],
}
export default config
