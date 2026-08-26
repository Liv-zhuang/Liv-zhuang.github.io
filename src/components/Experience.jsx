import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaGraduationCap, FaBriefcase, FaEnvelope, FaWeixin } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import Section from './Section'

function Entry({ icon, title, sub, years, isEducation }) {
  return (
    <HStack align="start" spacing={4}>
      <VStack boxSize="12" borderRadius="lg" bg="surface" border="1px solid" borderColor="border" flexShrink={0} align="center" justify="center">
        <Icon as={icon} boxSize={6} color="accent" />
      </VStack>
      <Stack spacing={1} flex={1}>
        <HStack justify="space-between" align="baseline">
          <Text fontWeight={600} fontSize="xl" color="text">
            {title}
          </Text>
          {years && (
            <Text fontFamily="mono" fontSize="sm" color="dim">
              {years}
            </Text>
          )}
        </HStack>
        <Text fontSize="md" color="muted" lineHeight="1.5">
          {sub}
        </Text>
      </Stack>
    </HStack>
  )
}

export default function Experience() {
  const { t } = useTranslation()
  const internships = t('experience.internships', { returnObjects: true })
  const education = t('experience.education', { returnObjects: true })
  const selfIntro = t('experience.selfIntro')

  return (
    <Section id="experience">
      <Text
        fontFamily="mono"
        fontSize="sm"
        color="headerOrange"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('experience.title')}
      </Text>
      <Divider borderColor="border" mb={8} />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
        <Stack spacing={5}>
          <Text fontWeight={600} fontSize="xl" color="text">
            {t('experience.internshipTitle')}
          </Text>
          {internships.map((item, i) => (
            <Entry
              key={i}
              icon={FaBriefcase}
              title={item.title}
              sub={item.sub}
              years={item.years}
            />
          ))}
        </Stack>

        <Stack spacing={5}>
          <Text fontWeight={600} fontSize="xl" color="text">
            {t('experience.educationTitle')}
          </Text>
          {education.map((item, i) => (
            <Entry
              key={i}
              icon={FaGraduationCap}
              title={item.title}
              sub={item.org}
              years={item.years}
              isEducation
            />
          ))}
        </Stack>
      </SimpleGrid>

      <Box
        mt={10}
        borderLeft="3px solid"
        borderColor="accent"
        pl={5}
        py={2}
      >
        <Stack spacing={5}>
          {selfIntro && (
            <Text fontSize="md" color="text" lineHeight="1.7">
              {selfIntro}
            </Text>
          )}
          <HStack spacing={3} wrap="wrap">
            <Chip label={t('contact.emailLabel')} value={t('contact.email')} href={`mailto:${t('contact.email')}`} icon={FaEnvelope} />
            <Chip label={t('contact.wechatLabel')} value={t('contact.wechat')} icon={FaWeixin} />
          </HStack>
        </Stack>
      </Box>
    </Section>
  )
}

function Chip({ label, value, href, icon }) {
  const inner = (
    <HStack spacing={2}>
      <Icon as={icon} boxSize={4} color="muted" />
      <Text fontFamily="mono" fontSize="sm" color="muted">
        {label}
      </Text>
      <Text fontFamily="mono" fontSize="sm" color="accent">
        {value}
      </Text>
    </HStack>
  )
  const styles = {
    px: 4,
    py: 2,
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'md',
    bg: 'surface',
    _hover: { borderColor: 'accent' },
    transition: 'border-color 0.2s',
  }
  return href ? (
    <Link href={href} isExternal={href.startsWith('http')} {...styles}>
      {inner}
    </Link>
  ) : (
    <Box {...styles}>{inner}</Box>
  )
}


