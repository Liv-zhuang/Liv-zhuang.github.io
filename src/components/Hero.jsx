import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <Box
      as="section"
      id="hero"
      minH="60vh"
      display="flex"
      alignItems="center"
      px={{ base: 6, md: 8 }}
    >
      <Container
        maxW="900px"
        mx="auto"
        w="100%"
        display="flex"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: 10, md: 16 }}
      >
        <Stack align="start" spacing={3} flex={1}>
          <Text
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight={700}
            color="#e6edf3"
            lineHeight={1.2}
          >
            {t('hero.name')}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="#8b949e" fontWeight={500}>
            {t('hero.title')}
          </Text>
          <Stack as="ul" listStyleType="none" spacing={1} mt={2}>
            {t('hero.subtitles', { returnObjects: true }).map((item, i) => (
              <Text as="li" key={i} fontSize="sm" color="#6e7681" fontFamily="mono">
                {item}
              </Text>
            ))}
          </Stack>
        </Stack>

        <Stack flexShrink={0} spacing={4} align="center">
          <Box
            borderRadius="full"
            overflow="hidden"
            w={{ base: '120px', md: '160px' }}
            h={{ base: '120px', md: '160px' }}
            border="2px solid #30363d"
            boxShadow="0 0 0 4px #21262d"
          >
            <Image
              src="/avatar.jpg"
              alt="Liv Zhuang"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
          <HStack spacing={2}>
            <Link href="https://www.linkedin.com/in/liv-zhuang-a77837348/" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color="#8b949e"
                _hover={{ color: '#0A66C2', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
            <Link href="https://github.com/Liv-zhuang" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color="#8b949e"
                _hover={{ color: '#e6edf3', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
            <Link href={`mailto:${t('contact.email')}`}>
              <IconButton
                aria-label="Email"
                icon={<FaEnvelope />}
                variant="ghost"
                color="#8b949e"
                _hover={{ color: '#79c0ff', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}
