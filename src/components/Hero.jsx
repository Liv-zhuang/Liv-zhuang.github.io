import {
  Box,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const ringShadow = useColorModeValue('0 0 0 4px #d0d7de', '0 0 0 4px #21262d')

  return (
    <Box
      as="section"
      id="hero"
      minH="60vh"
      display="flex"
      alignItems="center"
      px={{ base: 6, md: 12 }}
    >
      <Container
        maxW="1200px"
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
            color="text"
            lineHeight={1.2}
          >
            {t('hero.name')}
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="muted" fontWeight={500}>
            {t('hero.title')}
          </Text>

          <VStack align="start" spacing={1} mt={2} fontFamily="mono" fontSize="sm" color="dim">
            <Text as="span">{t('hero.education')}</Text>
            <Text as="span">{t('hero.experience')}</Text>
          </VStack>

          <Stack as="ul" listStyleType="none" spacing={1} mt={2}>
            {t('hero.subtitles', { returnObjects: true }).map((item, i) => (
              <Text as="li" key={i} fontSize="sm" color="muted" fontFamily="mono">
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
            border="2px solid"
            borderColor="borderStrong"
            boxShadow={ringShadow}
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
                color="muted"
                _hover={{ color: '#0A66C2', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
            <Link href="https://github.com/Liv-zhuang" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color="muted"
                _hover={{ color: 'text', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
            <Link href={`mailto:${t('contact.email')}`}>
              <IconButton
                aria-label="Email"
                icon={<FaEnvelope />}
                variant="ghost"
                color="muted"
                _hover={{ color: 'accent', bg: 'whiteAlpha.50' }}
                size="sm"
              />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}
