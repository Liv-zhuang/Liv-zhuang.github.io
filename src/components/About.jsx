import { Divider, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function About() {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <Text
        fontFamily="mono"
        fontSize="sm"
        color="headerOrange"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('about.title')}
      </Text>
      <Divider borderColor="border" mb={8} />
      <Text fontSize="md" color="muted" lineHeight="1.9" mb={4}>
        {t('about.p1')}
      </Text>
      <Text fontSize="md" color="muted" lineHeight="1.9" mb={4}>
        {t('about.p2')}
      </Text>
      <Text fontSize="md" color="muted" lineHeight="1.9">
        {t('about.p3')}
      </Text>
    </Section>
  )
}
