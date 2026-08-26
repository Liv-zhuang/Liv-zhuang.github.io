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
        color="headerOrange"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('experience.title')}
      </Text>
      <Divider borderColor="border" mb={8} />

      <Stack spacing={5}>
        {items.map((item, i) => (
          <Box
            key={i}
            bg="surface"
            border="1px solid"
            borderColor="border"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: 'accent' }}
            transition="border-color 0.2s"
          >
            <HStack justify="space-between" mb={1}>
              <Text fontWeight={600} color="text" fontSize="md">
                {item.title}
              </Text>
              <Text fontFamily="mono" fontSize="xs" color="dim">
                {item.period}
              </Text>
            </HStack>
            <Text fontSize="sm" color="accent" fontFamily="mono" mb={3}>
              @ {item.org}
            </Text>
            <Text fontSize="sm" color="muted" lineHeight="1.7" mb={3}>
              {item.desc}
            </Text>
            <Wrap spacing={2}>
              {item.tags.map((tag, j) => (
                <WrapItem key={j}>
                  <Box
                    px={2}
                    py={1}
                    border="1px solid"
                    borderColor="borderStrong"
                    borderRadius="md"
                    fontSize="xs"
                    color="muted"
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
