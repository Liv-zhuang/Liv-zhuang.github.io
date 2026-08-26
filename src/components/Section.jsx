import { Box } from '@chakra-ui/react'

export default function Section({ id, children }) {
  return (
    <Box
      as="section"
      id={id}
      maxW="900px"
      mx="auto"
      px={{ base: 6, md: 8 }}
      py={{ base: 16, md: 24 }}
    >
      {children}
    </Box>
  )
}
