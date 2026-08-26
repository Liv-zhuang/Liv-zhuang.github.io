import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'chakra',
  },
  semanticTokens: {
    colors: {
      appBg: { default: '#ffffff', _dark: '#0d1117' },
      surface: { default: '#f6f8fa', _dark: '#161b22' },
      border: { default: '#d0d7de', _dark: '#21262d' },
      borderStrong: { default: '#afb8c1', _dark: '#30363d' },
      text: { default: '#24292f', _dark: '#e6edf3' },
      muted: { default: '#57606a', _dark: '#8b949e' },
      dim: { default: '#6e7781', _dark: '#6e7681' },
      accent: { default: '#0969da', _dark: '#79c0ff' },
      headerOrange: { default: '#9a6700', _dark: '#f0925e' },
      green: { default: '#1a7f37', _dark: '#2aae67' },
    },
  },
})

export default theme
