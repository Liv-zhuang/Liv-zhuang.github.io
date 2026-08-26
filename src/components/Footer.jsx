import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Box as="footer" w="full" py={[6, 8]} mt={[8, 12]} borderTop="1px solid" borderColor="var(--border-color)">
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={[3, 4]} textAlign="center">
          <Text fontFamily="mono" fontSize={['2xs', 'xs']} letterSpacing="0.04em" color="textMuted">
            {t('footer.text')} {new Date().getFullYear()} {t('hero.name')}
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
