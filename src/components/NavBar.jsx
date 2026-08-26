import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaLinkedin, FaEnvelope, FaGithub, FaSun } from 'react-icons/fa6'
import { FiMoon } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.focus', href: '#focus' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.track', href: '#track' },
  { key: 'nav.contact', href: '#contact' },
]

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/liv-zhuang-a77837348/', icon: FaLinkedin, color: '#0A66C2' },
  { label: 'Email', href: 'mailto:zhuang9729@gmail.com', icon: FaEnvelope, color: 'accent' },
  { label: 'GitHub', href: 'https://github.com/Liv-zhuang', icon: FaGithub, color: 'text' },
]

export default function NavBar() {
  const { t, i18n } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  const goHome = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      bg="appBg"
      borderBottom="1px solid"
      borderColor="border"
      backdropFilter="blur(12px)"
    >
      <Container
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12 }}
        py={4}
        display="flex"
        align="center"
        justify="space-between"
      >
        <Link
          href="#top"
          onClick={goHome}
          fontFamily="mono"
          fontSize="lg"
          color="accent"
          letterSpacing="wider"
          fontWeight={700}
          _hover={{ opacity: 0.8 }}
        >
          Liv Zhuang
        </Link>

        <HStack spacing={1} display={{ base: 'none', md: 'flex' }} align="center">
          {LINKS.map((link) => (
            <Button
              key={link.key}
              as="a"
              href={link.href}
              variant="ghost"
              size="md"
              color="muted"
              fontSize="md"
              _hover={{ color: 'text', bg: 'whiteAlpha.50' }}
            >
              {t(link.key)}
            </Button>
          ))}

          <Box w="1px" h="16px" bg="border" mx={2} />

          {SOCIALS.map((s) => (
            <Link key={s.label} href={s.href} isExternal={!s.href.startsWith('mailto')}>
              <IconButton
                aria-label={s.label}
                icon={<s.icon />}
                variant="ghost"
                color="muted"
                _hover={{ color: s.color, bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
          ))}

          <Button
            size="sm"
            variant="outline"
            borderColor="borderStrong"
            color="accent"
            fontSize="xs"
            fontFamily="mono"
            px={3}
            ml={2}
            _hover={{ bg: 'whiteAlpha.50', borderColor: 'accent' }}
            onClick={toggleLang}
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Button>

          <IconButton
            aria-label="Toggle theme"
            icon={isDark ? <FaSun /> : <FiMoon />}
            variant="ghost"
            color="muted"
            _hover={{ color: 'text', bg: 'whiteAlpha.50' }}
            size="sm"
            onClick={toggleColorMode}
          />
        </HStack>

        <HStack display={{ base: 'flex', md: 'none' }}>
          <Button
            size="xs"
            variant="outline"
            borderColor="borderStrong"
            color="accent"
            fontFamily="mono"
            onClick={toggleLang}
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'dark' ? <FaSun /> : <FiMoon />}
            variant="ghost"
            color="muted"
            _hover={{ color: 'text', bg: 'whiteAlpha.50' }}
            size="sm"
            onClick={toggleColorMode}
          />
          <IconButton
            aria-label="menu"
            icon={<FaBars />}
            variant="ghost"
            color="muted"
            size="sm"
            onClick={onOpen}
          />
        </HStack>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="surface" borderLeft="1px solid" borderColor="border">
          <DrawerCloseButton color="muted" />
          <DrawerHeader borderBottom="1px solid" borderColor="border">
            <Text fontFamily="mono" fontSize="md" color="accent">
              Liv Zhuang
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={2} pt={4}>
              {LINKS.map((link) => (
                <Button
                  key={link.key}
                  as="a"
                  href={link.href}
                  variant="ghost"
                  color="muted"
                  w="100%"
                  justifyContent="start"
                  onClick={onClose}
                  _hover={{ color: 'accent' }}
                >
                  {t(link.key)}
                </Button>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
