import { Box, Flex, Text } from '@chakra-ui/react'

export default function SectionHeading({ title }) {
  return (
    <Flex align="center" gap={3} mb={5}>
      <Text as="span" fontFamily="mono" fontWeight="700" color="prompt" fontSize="lg" lineHeight="1">
        $
      </Text>
      <Text as="h2" fontFamily="mono" fontWeight={600} color="textPrimary" fontSize="xl" letterSpacing="-0.01em">
        {title}
      </Text>
      <Box flex={1} h="1px" bgGradient="linear(to-r, var(--border-strong), transparent)" />
    </Flex>
  )
}
