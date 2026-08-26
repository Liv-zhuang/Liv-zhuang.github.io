import { Box, IconButton, Link, Tooltip } from '@chakra-ui/react'

export default function SocialButton({ icon, label, href, color = 'var(--accent-color)' }) {
  return (
    <Tooltip label={label} fontSize="xs" hasArrow placement="bottom" openDelay={200} fontFamily="mono">
      <Link href={href} isExternal={!href.startsWith('mailto')} _hover={{ textDecoration: 'none' }}>
        <IconButton
          aria-label={label}
          icon={<Box as={icon} fontSize="1.1rem" />}
          size="sm"
          variant="ghost"
          borderRadius="md"
          border="1px solid"
          borderColor="var(--border-color)"
          fontFamily="mono"
          color="var(--secondary-text)"
          transition="all 0.2s ease"
          _hover={{
            color,
            bg: 'var(--hover-color)',
            borderColor: 'var(--border-strong)',
            transform: 'translateY(-2px)',
            boxShadow: 'var(--shadow-sm)',
          }}
          _active={{ transform: 'scale(0.95)' }}
        />
      </Link>
    </Tooltip>
  )
}
