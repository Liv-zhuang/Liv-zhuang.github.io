import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Text,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaXmark, FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaSun } from 'react-icons/fa6'
import { FiMoon } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import WechatQRButton from './WechatQRButton'

const LINKS = [
  { key: 'nav.skills', href: '#focus' },
  { key: 'nav.track', href: '#track' },
  { key: 'nav.contact', href: '#contact' },
]

const getLinks = (hasTrack) =>
  LINKS.filter((l) => l.key !== 'nav.track' || hasTrack)

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isDark = colorMode === 'dark'
  const logoGradient = isDark
    ? 'linear(112deg, #f0854e, #d76ad4, #8aa2f2)'
    : 'linear(112deg, #ef6a38, #c44fbf, #3a5fd9)'
  const trackCases = t('track.cases', { returnObjects: true })
  const links = getLinks(Array.isArray(trackCases) && trackCases.some((c) => !c.hidden))

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  const socials = [
    { icon: FaEnvelope, href: 'mailto:zhuang9729@gmail.com', label: 'Email' },
    { icon: FaGithub, href: 'https://github.com/Liv-zhuang', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/liv-zhuang-a77837348/', label: 'LinkedIn' },
    { icon: FaFilePdf, href: '/cv/resume.pdf', label: 'CV' },
  ]

  const SocialIcon = ({ s, size = '1.2rem' }) => (
    <ChakraLink
      href={s.href}
      isExternal={!s.href.startsWith('mailto')}
      aria-label={s.label}
      color="var(--secondary-text)"
      p={1.5}
      borderRadius="md"
      _hover={{ color: 'var(--accent-color)', transform: 'translateY(-2px)', bg: 'var(--hover-color)' }}
      transition="color 0.2s ease, transform 0.2s ease, background 0.2s ease"
    >
      <Box as={s.icon} fontSize={size} />
    </ChakraLink>
  )

  return (
    <Box
      as="nav"
      py={3}
      borderBottom="1px solid"
      borderColor="var(--border-color)"
      position="sticky"
      top={0}
      bg="color-mix(in srgb, var(--bg-color) 78%, transparent)"
      sx={{
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
      }}
      zIndex={1000}
      w="full"
    >
      <Flex justify="space-between" align="center" w="full" px={4} position="relative">
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="menu"
            icon={isOpen ? <FaXmark /> : <FaBars />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="var(--text-color)"
            _hover={{ bg: 'var(--hover-color)' }}
          />
        </Box>

        <ChakraLink
          href="#top"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          justifyContent="center"
          h="44px"
          gap={2}
          px={2}
          borderRadius="md"
          color="prompt"
          _hover={{
            bg: 'var(--hover-color)',
            transform: 'translateY(-1px)',
            filter: 'drop-shadow(0 3px 10px color-mix(in srgb, currentColor 40%, transparent))',
          }}
          transition="transform 0.2s ease, background 0.2s ease, filter 0.2s ease"
        >
          <Text
            as="span"
            fontFamily="mono"
            fontSize="lg"
            fontWeight={700}
            lineHeight="1"
            letterSpacing="-0.01em"
            bgGradient={logoGradient}
            bgClip="text"
          >
            Liv Zhuang
          </Text>
        </ChakraLink>

        <HStack spacing={7} display={{ base: 'none', md: 'flex' }} ml="auto" mr={{ base: 0, md: 6 }}>
          {links.map((item) => (
            <Box key={item.href} as="span" position="relative">
              <ChakraLink
                href={item.href}
                fontFamily="mono"
                fontSize="md"
                fontWeight={500}
                lineHeight="1.2"
                py={1}
                color="var(--secondary-text)"
                _hover={{ color: 'var(--text-color)', textDecoration: 'none' }}
                transition="color 0.2s ease"
              >
                {t(item.key)}
              </ChakraLink>
            </Box>
          ))}
        </HStack>

        <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
          {socials.map((s) => (
            <SocialIcon key={s.label} s={s} />
          ))}
          <Box h="22px" w="1px" bg="var(--border-color)" />
          <WechatQRButton placement="bottom" />
          <Button
            size="xs"
            variant="ghost"
            color="var(--text-color)"
            fontFamily="mono"
            fontWeight={600}
            fontSize="xs"
            letterSpacing="0.02em"
            px={2}
            minW="auto"
            onClick={toggleLang}
            _hover={{ bg: 'var(--hover-color)', transform: 'translateY(-2px)' }}
            transition="transform 0.2s ease, background 0.2s ease"
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={isDark ? <FaSun /> : <FiMoon />}
            onClick={toggleColorMode}
            variant="ghost"
            color="var(--text-color)"
            _hover={{ bg: 'var(--hover-color)', transform: 'translateY(-2px)' }}
            transition="transform 0.2s ease, background 0.2s ease"
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="var(--bg-color)" borderRight="1px solid" borderColor="var(--border-color)">
          <DrawerHeader
            color="var(--text-color)"
            fontFamily="mono"
            fontSize="sm"
            fontWeight={700}
            letterSpacing="0.04em"
            borderBottom="1px solid"
            borderColor="var(--border-color)"
          >
            <Text as="span" bgGradient={logoGradient} bgClip="text" fontFamily="mono" fontSize="lg">
              Liv Zhuang
            </Text>
          </DrawerHeader>
          <DrawerBody pt={4}>
            <VStack align="stretch" spacing={3}>
              {links.map((item) => (
                <ChakraLink
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  fontFamily="mono"
                  fontSize="md"
                  py={1}
                  color="var(--secondary-text)"
                  fontWeight={500}
                  _hover={{ textDecoration: 'none', color: 'var(--text-color)' }}
                  transition="color 0.2s ease"
                >
                  {t(item.key)}
                </ChakraLink>
              ))}

              <Box borderTop="1px solid" borderColor="var(--border-color)" my={2} />

              <VStack align="stretch" spacing={2}>
                {socials.map((s) => (
                  <ChakraLink
                    key={s.label}
                    href={s.href}
                    isExternal={!s.href.startsWith('mailto')}
                    fontFamily="mono"
                    fontSize="md"
                    py={1}
                    color="var(--secondary-text)"
                    _hover={{ textDecoration: 'none', color: 'var(--accent-color)' }}
                    transition="color 0.2s ease"
                  >
                    <Box as={s.icon} mr={2} display="inline-block" fontSize="1rem" />
                    {s.label}
                  </ChakraLink>
                ))}
              </VStack>

              <Box borderTop="1px solid" borderColor="var(--border-color)" my={2} />

              <HStack spacing={2}>
                <Button
                  size="sm"
                  variant="outline"
                  color="var(--text-color)"
                  borderColor="var(--border-color)"
                  fontFamily="mono"
                  fontWeight={600}
                  onClick={toggleLang}
                  flex={1}
                  _hover={{ bg: 'var(--hover-color)', borderColor: 'var(--border-strong)' }}
                  transition="background 0.2s ease, border-color 0.2s ease"
                >
                  {i18n.language === 'zh' ? 'English' : '中文'}
                </Button>
                <IconButton
                  aria-label="Toggle theme"
                  icon={isDark ? <FaSun /> : <FiMoon />}
                  onClick={toggleColorMode}
                  variant="outline"
                  color="var(--text-color)"
                  borderColor="var(--border-color)"
                  _hover={{ bg: 'var(--hover-color)', borderColor: 'var(--border-strong)' }}
                  transition="background 0.2s ease, border-color 0.2s ease"
                />
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

