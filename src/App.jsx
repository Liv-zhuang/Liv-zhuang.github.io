import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Track from './components/Track'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box id="top" minH="100vh">
      <Navbar />
      <Hero />
      <Skills />
      <Track />
      <Contact />
      <Footer />
    </Box>
  )
}
