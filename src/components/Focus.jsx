import { Box, Divider, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

function ItemList({ items }) {
  return (
    <Stack align="start" spacing={3}>
      {items.map((item, i) => (
        <Text key={i} fontSize="sm" color="#8b949e" lineHeight="1.7">
          <Text as="span" color="#30363d" mr={2} fontFamily="mono">
            —
          </Text>
          {item}
        </Text>
      ))}
    </Stack>
  )
}

export default function Focus() {
  const { t } = useTranslation()
  const groups = [
    { key: 'llm' },
    { key: 'embodied' },
  ]

  return (
    <Section id="focus">
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="#f0925e"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('focus.title')}
      </Text>
      <Divider borderColor="#21262d" mb={8} />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={5}>
        {groups.map((group) => (
          <Box
            key={group.key}
            bg="#161b22"
            border="1px solid #21262d"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: '#30363d' }}
            transition="border-color 0.2s"
          >
            <Text
              fontFamily="mono"
              fontSize="xs"
              color="#6e7681"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={4}
            >
              {t(`focus.${group.key}.label`)}
            </Text>
            <ItemList items={t(`focus.${group.key}.items`, { returnObjects: true })} />
          </Box>
        ))}
      </SimpleGrid>

      <Box
        bg="#161b22"
        border="1px solid #21262d"
        borderRadius="md"
        p={6}
        _hover={{ borderColor: '#30363d' }}
        transition="border-color 0.2s"
      >
        <Text
          fontFamily="mono"
          fontSize="xs"
          color="#6e7681"
          letterSpacing="widest"
          textTransform="uppercase"
          mb={4}
        >
          {t('focus.companies.label')}
        </Text>
        <ItemList items={t('focus.companies.items', { returnObjects: true })} />
      </Box>
    </Section>
  )
}
