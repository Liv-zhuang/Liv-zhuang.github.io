import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope, FaWeixin } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Contact() {
  const { t } = useTranslation()

  const contacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
      color: '#79c0ff',
    },
    {
      icon: FaWeixin,
      label: t('contact.wechatLabel'),
      value: t('contact.wechat'),
      href: undefined,
      color: '#2aae67',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Liv Zhuang',
      href: 'https://www.linkedin.com/in/liv-zhuang-a77837348/',
      color: '#0A66C2',
    },
  ]

  return (
    <Section id="contact">
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('contact.title')}
      </Text>
      <Divider borderColor="#21262d" mb={4} />
      <Text fontSize="sm" color="#6e7681" mb={10} fontFamily="mono">
        {t('contact.subtitle')}
      </Text>

      <Stack align="start" spacing={4}>
        {contacts.map((item) => (
          <HStack
            key={item.label}
            spacing={4}
            p={4}
            bg="#161b22"
            border="1px solid #21262d"
            borderRadius="md"
            w="100%"
            maxW="480px"
            _hover={{ borderColor: item.color, transform: 'translateX(4px)' }}
            transition="all 0.2s"
          >
            <Icon as={item.icon} color={item.color} boxSize={5} />
            <Box>
              <Text fontSize="xs" color="#6e7681" fontFamily="mono">
                {item.label}
              </Text>
              {item.href ? (
                <Link
                  href={item.href}
                  isExternal={item.href.startsWith('http')}
                  color="#e6edf3"
                  fontSize="sm"
                  _hover={{ color: item.color }}
                >
                  {item.value}
                </Link>
              ) : (
                <Text fontSize="sm" color="#e6edf3" fontFamily="mono">
                  {item.value}
                </Text>
              )}
            </Box>
          </HStack>
        ))}
      </Stack>
    </Section>
  )
}
