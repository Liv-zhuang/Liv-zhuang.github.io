import { Divider, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function About() {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('about.title')}
      </Text>
      <Divider borderColor="#21262d" mb={8} />
      <Text fontSize="sm" color="#8b949e" lineHeight="1.8" mb={4}>
        {t('about.p1')}
      </Text>
      <Text fontSize="sm" color="#8b949e" lineHeight="1.8" mb={4}>
        {t('about.p2')}
      </Text>
      <Text fontSize="sm" color="#8b949e" lineHeight="1.8">
        {t('about.p3')}
      </Text>
    </Section>
  )
}
