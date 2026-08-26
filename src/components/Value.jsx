import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Value() {
  const { t } = useTranslation()
  const items = t('value.items', { returnObjects: true })

  return (
    <Section id="value">
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('value.title')}
      </Text>
      <Divider borderColor="#21262d" mb={8} />

      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
        {items.map((item, i) => (
          <Box
            key={i}
            bg="#161b22"
            border="1px solid #21262d"
            borderRadius="md"
            p={5}
            _hover={{ borderColor: '#79c0ff', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Text fontWeight={600} color="#e6edf3" fontSize="sm" mb={2}>
              {item.label}
            </Text>
            <Text fontSize="xs" color="#8b949e" lineHeight="1.7">
              {item.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  )
}
