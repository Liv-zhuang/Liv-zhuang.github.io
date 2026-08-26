import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaBriefcase, FaEnvelope, FaGithub, FaLinkedin, FaFilePdf, FaCheck } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import SocialButton from './SocialButton'

const MotionBox = motion(Box)
const MotionText = motion(Text)

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}

export default function Hero() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(null)
  const copyTimer = useRef(null)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const handleCopy = (key, value) => {
    copyText(value)
    setCopied(key)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(null), 1600)
  }

  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.400')
  const bg = useColorModeValue('gray.50', 'gray.900')
  const nameGradient = useColorModeValue(
    'linear(112deg, #ef6a38, #c44fbf, #3a5fd9)',
    'linear(112deg, #f0854e, #d76ad4, #8aa2f2)',
  )

  const research = t('hero.research', { returnObjects: true })
  const education = t('hero.education', { returnObjects: true })

  const socials = [
    { href: 'https://www.linkedin.com/in/liv-zhuang-a77837348/', icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' },
    { href: 'https://github.com/Liv-zhuang', icon: FaGithub, label: 'GitHub', color: 'var(--accent-color)' },
    { href: `mailto:${t('contact.email')}`, icon: FaEnvelope, label: 'Email', color: 'var(--accent-color)' },
    { href: '/cv/resume.pdf', icon: FaFilePdf, label: 'CV', color: 'var(--prompt-color)' },
  ]

  const copyChips = [
    { key: 'email', label: t('contact.emailLabel'), value: t('contact.email') },
    { key: 'wechat', label: t('contact.wechatLabel'), value: t('contact.wechat') },
  ]

  return (
    <Box
      w="full"
      bg={bg}
      py={[4, 5, 10]}
      mt={[2, 3, 4]}
      borderBottom="1px solid"
      borderColor="var(--border-color)"
    >
      <Container maxW={['full', 'full', '7xl']} px={[2, 4, 8]}>
        <Stack direction={['column', 'column', 'row']} spacing={[3, 4, 6]} align="center" justify="space-between">
          <VStack spacing={[2, 3]} align={['center', 'center', 'flex-start']} flex="1">
            <MotionText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              as="h1"
              fontSize={['lg', 'xl', '3xl']}
              fontWeight="bold"
              fontFamily="mono"
              letterSpacing="-0.01em"
              color={headingColor}
              lineHeight="shorter"
              mb={[1, 2, 3]}
              display="flex"
              alignItems="center"
              gap={[1, 2]}
              flexWrap={['wrap', 'wrap', 'nowrap']}
              textAlign={['center', 'center', 'left']}
              w="full"
              sx={{ justifyContent: ['center', 'center', 'flex-start'] }}
            >
              <MotionText
                as="span"
                color="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                $
              </MotionText>
              <MotionText
                as="span"
                initial={{ width: 0 }}
                animate={{ width: 'auto' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                overflow="hidden"
                whiteSpace="nowrap"
                display="inline-block"
              >
                {t('hero.greeting')}{' '}
              </MotionText>
              <MotionText
                as="span"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.6 }}
                color="accent"
                fontFamily="mono"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <MotionText
                  as="span"
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  overflow="hidden"
                  whiteSpace="nowrap"
                  bgGradient={nameGradient}
                  bgClip="text"
                >
                  {t('hero.name')}
                </MotionText>
                <Box
                  as="span"
                  aria-hidden="true"
                  color="accent"
                  sx={{
                    '@keyframes heroCursorBlink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0 },
                    },
                    animation: 'heroCursorBlink 1.1s step-end infinite',
                  }}
                >
                  ▍
                </Box>
              </MotionText>
            </MotionText>

            <Box w="full" h="1px" bgGradient="linear(to-r, var(--border-strong), transparent)" />

            <SimpleGrid columns={[1, 1, 2]} spacing={[3, 3, 4]} w="full">
              <VStack align="start" spacing={2}>
                <HStack spacing={2} align="center">
                  <Box w="3px" h="12px" bg="accent" borderRadius="full" flexShrink={0} />
                  <Text
                    as="h3"
                    fontFamily="mono"
                    color="textMuted"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontSize="xs"
                    fontWeight={600}
                  >
                    {t('hero.researchTitle')}
                  </Text>
                </HStack>
                {research.map((item, index) => {
                  const hasLink = item.href && item.linkText
                  const [before = '', after = ''] = hasLink ? item.title.split(item.linkText) : ['', '']
                  return (
                    <Box key={index} w="full">
                      <HStack
                        spacing={2.5}
                        p={2}
                        minH="46px"
                        align="center"
                        borderRadius="10px"
                        border="1px solid"
                        borderColor="transparent"
                        transition="background 0.2s ease, border-color 0.2s ease"
                        _hover={{ bg: 'var(--hover-color)', borderColor: 'var(--border-color)' }}
                        w="full"
                      >
                        <Flex
                          w="32px"
                          h="32px"
                          borderRadius="8px"
                          bg="var(--elevated-bg)"
                          border="1px solid"
                          borderColor="var(--border-color)"
                          align="center"
                          justify="center"
                          flexShrink={0}
                        >
                          {item.logo ? (
                            <Image src={item.logo} alt={item.title} w="24px" h="24px" objectFit="contain" />
                          ) : (
                            <Box as={FaBriefcase} color="accent" fontSize="sm" />
                          )}
                        </Flex>
                        <VStack align="start" spacing={0} flex={1} minW={0}>
                          <Text fontSize={['xs', 'sm']} fontWeight="medium" lineHeight="short" color={headingColor}>
                            {hasLink ? (
                              <>
                                {before}
                                <Link href={item.href} isExternal _hover={{ textDecoration: 'underline' }}>
                                  <Box as="span" bgGradient={nameGradient} bgClip="text" fontWeight={600}>
                                    {item.linkText}
                                  </Box>
                                </Link>
                                {after}
                              </>
                            ) : (
                              item.title
                            )}
                          </Text>
                          <Text fontSize="xs" color={textColor} lineHeight="short" noOfLines={1}>
                            {item.sub}
                          </Text>
                        </VStack>
                        {item.years && (
                          <Text fontFamily="mono" fontSize="2xs" color="textMuted" flexShrink={0}>
                            {item.years}
                          </Text>
                        )}
                      </HStack>
                    </Box>
                  )
                })}
              </VStack>

              <VStack align="start" spacing={2}>
                <HStack spacing={2} align="center">
                  <Box w="3px" h="12px" bg="accent" borderRadius="full" flexShrink={0} />
                  <Text
                    as="h3"
                    fontFamily="mono"
                    color="textMuted"
                    textTransform="uppercase"
                    letterSpacing="wider"
                    fontSize="xs"
                    fontWeight={600}
                  >
                    {t('hero.educationTitle')}
                  </Text>
                </HStack>
                {education.map((item, index) => (
                  <HStack
                    key={index}
                    spacing={2.5}
                    p={2}
                    minH="46px"
                    align="center"
                    borderRadius="10px"
                    border="1px solid"
                    borderColor="transparent"
                    transition="background 0.2s ease, border-color 0.2s ease"
                    _hover={{ bg: 'var(--hover-color)', borderColor: 'var(--border-color)' }}
                    w="full"
                  >
                    <Flex
                      w="32px"
                      h="32px"
                      borderRadius="8px"
                      bg="var(--elevated-bg)"
                      border="1px solid"
                      borderColor="var(--border-color)"
                      align="center"
                      justify="center"
                      flexShrink={0}
                    >
                      {item.logo ? (
                        <Image src={item.logo} alt={item.institution} w="24px" h="24px" objectFit="contain" />
                      ) : (
                        <Text fontSize="sm" fontWeight="bold" color="accent">
                          {item.institution.charAt(0)}
                        </Text>
                      )}
                    </Flex>
                    <VStack align="start" spacing={0} flex={1} minW={0}>
                      <Text fontSize={['xs', 'sm']} fontWeight="medium" lineHeight="short" color={headingColor}>
                        {item.course}
                      </Text>
                      <Text fontSize="xs" color={textColor} lineHeight="short">
                        {item.institution} · {item.year}
                      </Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
            </SimpleGrid>

            <Box w="full" h="1px" bgGradient="linear(to-r, var(--border-strong), transparent)" />

            <Flex w="full" direction={['column', 'column', 'row']} align={['center', 'center', 'center']} gap={[2, 2, 4]}>
              <Text
                fontSize="sm"
                color="var(--secondary-text)"
                lineHeight="tall"
                textAlign="left"
                flex={1}
                borderLeft="2px solid"
                borderColor="accent"
                pl={3}
              >
                <Box as="span" bgGradient={nameGradient} bgClip="text" fontWeight={600}>
                  {t('hero.taglineLabel')}
                </Box>
                {t('hero.tagline')}
              </Text>
              <VStack spacing={1.5} align={['center', 'center', 'flex-start']} flexShrink={0}>
                {copyChips.map((chip) => {
                  const isCopied = copied === chip.key
                  return (
                    <Tooltip key={chip.key} label={t('contact.copyHint')} fontSize="xs" hasArrow placement="top" openDelay={200} fontFamily="mono">
                      <HStack
                        as="button"
                        type="button"
                        aria-label={`${t('contact.copyHint')}: ${chip.value}`}
                        onClick={() => handleCopy(chip.key, chip.value)}
                        cursor="pointer"
                        bg="transparent"
                        spacing={1.5}
                        px={2.5}
                        py={1}
                        border="1px solid"
                        borderColor="var(--border-color)"
                        borderRadius="8px"
                        color="var(--secondary-text)"
                        transition="border-color 0.15s ease, color 0.15s ease"
                        _hover={{ borderColor: 'accent', color: 'accent' }}
                      >
                        <Box as={isCopied ? FaCheck : FaEnvelope} boxSize={3.5} color={isCopied ? 'prompt' : undefined} />
                        <Text as="span" fontSize="2xs" fontFamily="mono" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
                          {chip.label}
                        </Text>
                        <Box as="span" position="relative" display="inline-block" maxW={['170px', '220px', '260px']}>
                          <Text fontSize="xs" fontFamily="mono" isTruncated visibility={isCopied ? 'hidden' : 'visible'}>
                            {chip.value}
                          </Text>
                          {isCopied && (
                            <Flex as="span" position="absolute" inset={0} align="center" justify="center" fontSize="xs" fontFamily="mono" color="prompt" whiteSpace="nowrap">
                              {t('contact.copied')}
                            </Flex>
                          )}
                        </Box>
                      </HStack>
                    </Tooltip>
                  )
                })}
                <Link
                  href="https://www.linkedin.com/in/liv-zhuang-a77837348/"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <HStack
                    spacing={1.5}
                    px={2.5}
                    py={1}
                    border="1px solid"
                    borderColor="var(--border-color)"
                    borderRadius="8px"
                    color="var(--secondary-text)"
                    transition="border-color 0.15s ease, color 0.15s ease"
                    _hover={{ borderColor: 'accent', color: 'accent' }}
                  >
                    <Box as={FaLinkedin} boxSize={3.5} />
                    <Text fontSize="xs" fontFamily="mono">
                      linkedin
                    </Text>
                  </HStack>
                </Link>
              </VStack>
            </Flex>
          </VStack>

          <MotionBox initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <VStack spacing={[2, 3]}>
              <Box position="relative" transition="transform 0.25s ease" _hover={{ transform: 'translateY(-3px)' }}>
                <Image
                  src="/avatar.jpg"
                  alt={t('hero.name')}
                  position="relative"
                  borderRadius="16px"
                  w={['150px', '180px', '220px']}
                  h={['200px', '240px', '293px']}
                  objectFit="cover"
                  bg="var(--card-bg)"
                  border="1px solid"
                  borderColor="var(--border-color)"
                  boxShadow="var(--shadow-card)"
                />
              </Box>
              <HStack spacing={[1, 1.5]} justify="center">
                {socials.map((s) => (
                  <SocialButton key={s.label} icon={s.icon} label={s.label} href={s.href} color={s.color} />
                ))}
              </HStack>
            </VStack>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  )
}
