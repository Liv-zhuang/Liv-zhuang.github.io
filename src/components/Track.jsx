import { Box, Container, Divider, Grid, HStack, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'

export default function Track() {
  const { t } = useTranslation()
  const cases = t('track.cases', { returnObjects: true }).filter((c) => !c.hidden)

  if (cases.length === 0) return null

  return (
    <Box id="track" w="full" py={[4, 6]}>
      <Container maxW={['full', 'full', '7xl']} px={[2, 4, 8]}>
        <SectionHeading title={t('track.title')} />

        <Grid columns={[1, 1, 2]} gap={[3, 4]} w="full">
          {cases.map((item, i) => (
            <Box
              key={i}
              bg="var(--card-bg)"
              border="1px solid"
              borderColor="var(--border-color)"
              borderRadius="10px"
              boxShadow="var(--shadow-sm)"
              p={4}
              transition="transform .2s ease, box-shadow .2s ease, border-color .2s ease"
              _hover={{ transform: 'translateY(-3px)', borderColor: 'var(--accent-color)', boxShadow: 'var(--shadow-lift)' }}
            >
              <HStack align="center" gap={3} mb={2}>
                <HStack spacing={2}>
                  <Box w="3px" h="12px" bg="accent" borderRadius="full" flexShrink={0} />
                  <Text fontFamily="mono" fontSize="xs" color="textMuted" letterSpacing="widest" fontWeight={600}>
                    {item.label}
                  </Text>
                </HStack>
                <Text fontFamily="mono" fontSize="xs" color="accent">
                  {item.path}
                </Text>
                <Box flex={1} h="1px" bgGradient="linear(to-r, var(--border-strong), transparent)" />
              </HStack>
              <HStack spacing={8} mt={3} mb={3}>
                <VStack align="start" spacing={0}>
                  <Text fontSize="2xl" fontWeight={700} color="warm" fontFamily="mono">
                    {item.base}
                  </Text>
                  <Text fontSize="xs" color="textMuted">
                    {t('track.baseLabel')}
                  </Text>
                </VStack>
                <VStack align="start" spacing={0}>
                  <Text fontSize="2xl" fontWeight={700} color="accent" fontFamily="mono">
                    {item.cash}
                  </Text>
                  <Text fontSize="xs" color="textMuted">
                    {t('track.cashLabel')}
                  </Text>
                </VStack>
                <VStack align="start" spacing={0}>
                  <Text fontSize="2xl" fontWeight={700} color="prompt" fontFamily="mono">
                    {item.total}
                  </Text>
                  <Text fontSize="xs" color="textMuted">
                    {t('track.totalLabel')}
                  </Text>
                </VStack>
              </HStack>
              <Divider borderColor="var(--border-color)" mb={3} />
              <Text fontSize="sm" color="textSecondary" lineHeight="1.7">
                {item.desc}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
