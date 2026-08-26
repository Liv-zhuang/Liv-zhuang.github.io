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
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('track.title')}
      </Text>
      <Divider borderColor="#21262d" mb={4} />
      <Text fontSize="sm" color="#6e7681" mb={8} fontFamily="mono">
        {t('track.subtitle')}
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
        {cases.map((item, i) => (
          <Box
            key={i}
            bg="#161b22"
            border="1px solid #21262d"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: '#79c0ff', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Text fontFamily="mono" fontSize="xs" color="#6e7681" mb={4} letterSpacing="widest">
              {item.label}
            </Text>
            <HStack spacing={8} mb={4}>
              <VStack align="start" spacing={0}>
                <Text fontSize="2xl" fontWeight={700} color="#79c0ff" fontFamily="mono">
                  {item.cash}
                </Text>
                <Text fontSize="xs" color="#6e7681">
                  {t('track.cashLabel')}
                </Text>
              </VStack>
              <VStack align="start" spacing={0}>
                <Text fontSize="2xl" fontWeight={700} color="#f0925e" fontFamily="mono">
                  {item.total}
                </Text>
                <Text fontSize="xs" color="#6e7681">
                  {t('track.totalLabel')}
                </Text>
              </VStack>
            </HStack>
            <Divider borderColor="#21262d" mb={4} />
            <Text fontSize="sm" color="#8b949e" lineHeight="1.7">
              {item.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  )
}
