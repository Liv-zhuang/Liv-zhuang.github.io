import { Box, Divider, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Track() {
  const { t } = useTranslation()
  const cases = t('track.cases', { returnObjects: true })

  return (
    <Section id="track">
      <Text
        fontFamily="mono"
        fontSize="sm"
        color="headerOrange"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('track.title')}
      </Text>
      <Divider borderColor="border" mb={4} />
      <Text fontSize="md" color="dim" mb={8} fontFamily="mono">
        {t('track.subtitle')}
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        {cases.map((item, i) => (
          <Box
            key={i}
            bg="surface"
            border="1px solid"
            borderColor="border"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: 'accent', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Text fontFamily="mono" fontSize="sm" color="dim" mb={4} letterSpacing="widest">
              {item.label}
            </Text>
            <HStack spacing={8} mb={4}>
              <VStack align="start" spacing={0}>
                <Text fontSize="3xl" fontWeight={700} color="accent" fontFamily="mono">
                  {item.cash}
                </Text>
                <Text fontSize="sm" color="dim">
                  {t('track.cashLabel')}
                </Text>
              </VStack>
              <VStack align="start" spacing={0}>
                <Text fontSize="3xl" fontWeight={700} color="headerOrange" fontFamily="mono">
                  {item.total}
                </Text>
                <Text fontSize="sm" color="dim">
                  {t('track.totalLabel')}
                </Text>
              </VStack>
            </HStack>
            <Divider borderColor="border" mb={4} />
            <Text fontSize="md" color="muted" lineHeight="1.7">
              {item.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  )
}
