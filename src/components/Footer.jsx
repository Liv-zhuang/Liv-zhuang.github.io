import { useEffect } from 'react'
import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  useEffect(() => {
    if (document.getElementById('busuanzi-script')) return
    const s = document.createElement('script')
    s.id = 'busuanzi-script'
    s.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
    s.async = true
    document.head.appendChild(s)
  }, [])

  return (
    <Box as="footer" w="full" py={[6, 8]} mt={[8, 12]} borderTop="1px solid" borderColor="var(--border-color)">
      <Container maxW="7xl" px={[4, 6, 8]}>
        <VStack spacing={[3, 4]} textAlign="center">
          <Text fontFamily="mono" fontSize={['2xs', 'xs']} letterSpacing="0.04em" color="textMuted">
            {t('footer.text')} {new Date().getFullYear()} {t('hero.name')}
          </Text>
          <Text fontFamily="mono" fontSize={['2xs', 'xs']} color="textMuted">
            {t('footer.visits')}{' '}
            <Text as="span" color="textSecondary" fontWeight="600">
              <span id="busuanzi_value_site_pv">…</span>
            </Text>
            {' · '}
            {t('footer.visitors')}{' '}
            <Text as="span" color="textSecondary" fontWeight="600">
              <span id="busuanzi_value_site_uv">…</span>
            </Text>
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
