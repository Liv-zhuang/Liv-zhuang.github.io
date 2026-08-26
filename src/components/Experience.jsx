import {
  Box,
  Divider,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true })

  return (
    <Section id="experience">
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('experience.title')}
      </Text>
      <Divider borderColor="#21262d" mb={8} />

      <Stack spacing={5}>
        {items.map((item, i) => (
          <Box
            key={i}
            bg="#161b22"
            border="1px solid #21262d"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: '#79c0ff' }}
            transition="border-color 0.2s"
          >
            <HStack justify="space-between" mb={1}>
              <Text fontWeight={600} color="#e6edf3" fontSize="md">
                {item.title}
              </Text>
              <Text fontFamily="mono" fontSize="xs" color="#6e7681">
                {item.period}
              </Text>
            </HStack>
            <Text fontSize="sm" color="#79c0ff" fontFamily="mono" mb={3}>
              @ {item.org}
            </Text>
            <Text fontSize="sm" color="#8b949e" lineHeight="1.7" mb={3}>
              {item.desc}
            </Text>
            <Wrap spacing={2}>
              {item.tags.map((tag, j) => (
                <WrapItem key={j}>
                  <Box
                    px={2}
                    py={1}
                    border="1px solid #30363d"
                    borderRadius="md"
                    fontSize="xs"
                    color="#8b949e"
                    fontFamily="mono"
                  >
                    {tag}
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        ))}
      </Stack>
    </Section>
  )
}
