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
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

const LINKS = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.focus', href: '#focus' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.track', href: '#track' },
  { key: 'nav.contact', href: '#contact' },
]

export default function NavBar() {
  const { t, i18n } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const bg = useColorModeValue('#0d1117', '#0d1117')
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      bg={bg}
      borderBottom="1px solid"
      borderColor="#21262d"
      backdropFilter="blur(12px)"
    >
      <Container
        maxW="900px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={4}
        display="flex"
        align="center"
        justify="space-between"
      >
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="#79c0ff"
          letterSpacing="wider"
          fontWeight={600}
        >
          <Text as="span" color="#6e7681">
            ~/
          </Text>
          liv-zhuang
        </Text>

        <HStack spacing={1} display={{ base: 'none', md: 'flex' }}>
          {LINKS.map((link) => (
            <Button
              key={link.key}
              as="a"
              href={link.href}
              variant="ghost"
              size="sm"
              color="#8b949e"
              fontSize="sm"
              _hover={{ color: '#e6edf3', bg: 'whiteAlpha.50' }}
            >
              {t(link.key)}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline"
            borderColor="#30363d"
            color="#79c0ff"
            fontSize="xs"
            fontFamily="mono"
            px={3}
            ml={2}
            _hover={{ bg: 'whiteAlpha.50', borderColor: '#79c0ff' }}
            onClick={toggleLang}
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Button>
        </HStack>

        <HStack display={{ base: 'flex', md: 'none' }}>
          <Button
            size="xs"
            variant="outline"
            borderColor="#30363d"
            color="#79c0ff"
            fontFamily="mono"
            onClick={toggleLang}
          >
            {i18n.language === 'zh' ? 'EN' : '中文'}
          </Button>
          <IconButton
            aria-label="menu"
            icon={<FaBars />}
            variant="ghost"
            color="#8b949e"
            size="sm"
            onClick={onOpen}
          />
        </HStack>
      </Container>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#161b22" borderLeft="1px solid #21262d">
          <DrawerCloseButton color="#8b949e" />
          <DrawerHeader borderBottom="1px solid #21262d">
            <Text fontFamily="mono" fontSize="sm" color="#79c0ff">
              liv-zhuang
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
                  color="#8b949e"
                  w="100%"
                  justifyContent="start"
                  onClick={onClose}
                  _hover={{ color: '#e6edf3' }}
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
