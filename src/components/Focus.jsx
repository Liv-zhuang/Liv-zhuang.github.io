import { Box, Divider, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Section from './Section'

function ItemList({ items }) {
  return (
    <Stack align="start" spacing={3}>
      {items.map((item, i) => (
        <Text key={i} fontSize="md" color="muted" lineHeight="1.8">
          <Text as="span" color="dim" mr={2} fontFamily="mono">
            ï¿?          </Text>
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
        fontSize="sm"
        color="headerOrange"
        mb={3}
        letterSpacing="widest"
      >
        ## {t('focus.title')}
      </Text>
      <Divider borderColor="border" mb={8} />

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mb={5}>
        {groups.map((group) => (
          <Box
            key={group.key}
            bg="surface"
            border="1px solid"
            borderColor="border"
            borderRadius="md"
            p={6}
            _hover={{ borderColor: 'borderStrong' }}
            transition="border-color 0.2s"
          >
            <Text
              fontFamily="mono"
              fontSize="sm"
              color="dim"
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
        bg="surface"
        border="1px solid"
        borderColor="border"
        borderRadius="md"
        p={6}
        _hover={{ borderColor: 'borderStrong' }}
        transition="border-color 0.2s"
      >
        <Text
          fontFamily="mono"
          fontSize="sm"
          color="dim"
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


