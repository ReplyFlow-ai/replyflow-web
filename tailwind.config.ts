import type { Config } from 'tailwindcss'


const config: Config = {
darkMode: 'class',
content: [
'./app/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
],
theme: {
extend: {
colors: {
// Monochrome palette
base: {
50: '#f7f7f7',
100: '#eaeaea',
200: '#d4d4d4',
300: '#a3a3a3',
400: '#737373',
500: '#525252',
600: '#404040',
700: '#2e2e2e',
800: '#1f1f1f',
900: '#141414'
}
},
boxShadow: {
soft: '0 10px 30px rgba(0,0,0,0.25)'
}
},
},
plugins: [],
}
export default config
