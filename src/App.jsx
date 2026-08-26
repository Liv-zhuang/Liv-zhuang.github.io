import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Focus from './components/Focus'
import Experience from './components/Experience'
import Track from './components/Track'
import Value from './components/Value'
import Contact from './components/Contact'

export default function App() {
  const { t } = useTranslation()

  return (
    <Box id="top" bg="appBg" minH="100vh">
      <NavBar />
      <Box pt="64px">
        <Hero />
        <About />
        <Focus />
        <Experience />
        <Track />
        <Value />
        <Contact />
        <Box borderTop="1px solid" borderColor="border" textAlign="center" py={8}>
          <Text fontFamily="mono" fontSize="xs" color="dim">
            {t('footer.text')}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
