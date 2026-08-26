import { Box, Container, Flex, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'

function GroupCard({ label, items }) {
  return (
    <Box
      bg="var(--card-bg)"
      border="1px solid"
      borderColor="var(--border-color)"
      borderRadius="10px"
      boxShadow="var(--shadow-sm)"
      p={4}
      transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
      _hover={{ transform: 'translateY(-2px)', borderColor: 'var(--accent-color)', boxShadow: 'var(--shadow-lift)' }}
    >
      <HStack spacing={2} align="center" mb={3}>
        <Box w="3px" h="12px" bg="accent" borderRadius="full" flexShrink={0} />
        <Text as="h3" fontFamily="mono" color="textMuted" textTransform="uppercase" letterSpacing="wider" fontSize="xs" fontWeight={600}>
          {label}
        </Text>
      </HStack>
      <Stack align="start" spacing={2}>
        {items.map((item, i) => (
          <Text key={i} fontSize="sm" color="textSecondary" lineHeight="1.7">
            <Text as="span" color="textMuted" mr={2} fontFamily="mono">
              —
            </Text>
            {item}
          </Text>
        ))}
      </Stack>
    </Box>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const companies = t('skills.companies.items', { returnObjects: true })

  return (
    <Box w="full" py={[4, 6]} >
      <Container maxW={['full', 'full', '7xl']} px={[2, 4, 8]}>
        <SectionHeading title={t('skills.title')} />

        <SimpleGrid columns={[1, 1, 2]} spacing={[3, 4]}>
          <GroupCard label={t('skills.llm.label')} items={t('skills.llm.items', { returnObjects: true })} />
          <GroupCard label={t('skills.embodied.label')} items={t('skills.embodied.items', { returnObjects: true })} />
        </SimpleGrid>

        <Flex gap={2.5} flexWrap="wrap" align="flex-start" mt={[3, 4]}>
          {companies.map((name) => (
            <HStack
              key={name}
              spacing={2}
              px={3}
              py={2}
              bg="var(--card-bg)"
              border="1px solid"
              borderColor="var(--border-color)"
              borderRadius="8px"
              boxShadow="var(--shadow-sm)"
              transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
              _hover={{ transform: 'translateY(-1px)', borderColor: 'var(--accent-color)', boxShadow: 'var(--shadow-lift)' }}
            >
              <Text fontSize="sm" fontFamily="mono" fontWeight="semibold" color="textPrimary" lineHeight="1.4">
                {name}
              </Text>
            </HStack>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
