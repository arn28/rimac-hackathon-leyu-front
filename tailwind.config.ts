import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/theme'

const config: Config = {
  content: [
    // single component styles
    './node_modules/@nextui-org/theme/dist/components/button.js',
    // or you can use a glob pattern (multiple component styles)
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f7052d',
      },
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
          large: '6px', // rounded-large
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
