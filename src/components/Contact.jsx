import { useEffect, useRef, useState } from 'react'
import { Box, Container, Flex, Link, Text, VStack } from '@chakra-ui/react'
import { FaEnvelope, FaWeixin, FaLinkedin, FaGithub, FaCheck } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'

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

export default function Contact() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = (key, value) => {
    copyText(value)
    setCopied(key)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(null), 1600)
  }

  const rows = [
    {
      key: 'email',
      icon: FaEnvelope,
      label: t('contact.emailLabel'),
      value: t('contact.email'),
      copy: true,
    },
    {
      key: 'wechat',
      icon: FaWeixin,
      label: t('contact.wechatLabel'),
      value: t('contact.wechat'),
      copy: true,
    },
    {
      key: 'linkedin',
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Liv Zhuang',
      href: 'https://www.linkedin.com/in/liv-zhuang-a77837348/',
    },
    {
      key: 'github',
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Liv-zhuang',
      href: 'https://github.com/Liv-zhuang',
    },
  ]

  return (
    <Box id="contact" w="full" py={[4, 6]}>
      <Container maxW={['full', 'full', '7xl']} px={[2, 4, 8]}>
        <SectionHeading title={t('contact.title')} />
        <Text fontSize="sm" color="textSecondary" mb={4} lineHeight="tall" maxW="760px">
          {t('contact.subtitle')}
        </Text>

        <Flex
          bg="var(--card-bg)"
          border="1px solid"
          borderColor="var(--border-color)"
          borderRadius="10px"
          boxShadow="var(--shadow-sm)"
          direction={['column', 'column', 'row']}
          maxW="860px"
          overflow="hidden"
        >
          {rows.map((row, i) => (
            <Box
              key={row.key}
              flex="1"
              borderRight={['none', 'none', i < rows.length - 1 ? '1px solid' : 'none']}
              borderBottom={[i < rows.length - 1 ? '1px solid' : 'none', i < rows.length - 1 ? '1px solid' : 'none', 'none']}
              borderColor="var(--border-color)"
            >
              {row.copy ? (
                <Flex
                  as="button"
                  type="button"
                  onClick={() => handleCopy(row.key, row.value)}
                  cursor="pointer"
                  w="full"
                  align="center"
                  gap={2.5}
                  p={4}
                  _hover={{ bg: 'var(--hover-color)' }}
                  transition="background 0.2s ease"
                >
                  <Box as={copied === row.key ? FaCheck : row.icon} boxSize={4} color={copied === row.key ? 'prompt' : 'accent'} flexShrink={0} />
                  <VStack align="start" spacing={0.5} textAlign="left">
                    <Text fontSize="2xs" fontFamily="mono" fontWeight="bold" color="textMuted" textTransform="uppercase" letterSpacing="wide">
                      {row.label}
                    </Text>
                    <Text fontSize="xs" fontFamily="mono" color={copied === row.key ? 'prompt' : 'textPrimary'}>
                      {copied === row.key ? t('contact.copied') : row.value}
                    </Text>
                  </VStack>
                </Flex>
              ) : (
                <Link href={row.href} isExternal _hover={{ textDecoration: 'none' }}>
                  <Flex w="full" align="center" gap={2.5} p={4} _hover={{ bg: 'var(--hover-color)' }} transition="background 0.2s ease">
                    <Box as={row.icon} boxSize={4} color="accent" flexShrink={0} />
                    <VStack align="start" spacing={0.5} textAlign="left">
                      <Text fontSize="2xs" fontFamily="mono" fontWeight="bold" color="textMuted" textTransform="uppercase" letterSpacing="wide">
                        {row.label}
                      </Text>
                      <Text fontSize="xs" fontFamily="mono" color="textPrimary">
                        {row.value}
                      </Text>
                    </VStack>
                  </Flex>
                </Link>
              )}
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
