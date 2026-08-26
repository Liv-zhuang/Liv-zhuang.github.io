import { Box } from '@chakra-ui/react'

export default function Section({ id, children }) {
  return (
    <Box
      as="section"
      id={id}
      maxW="1200px"
      mx="auto"
      px={{ base: 6, md: 12 }}
      py={{ base: 16, md: 24 }}
    >
      {children}
    </Box>
  )
}
