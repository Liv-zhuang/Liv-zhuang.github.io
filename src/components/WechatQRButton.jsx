import {
  Box,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react'
import { FaWeixin } from 'react-icons/fa6'

export default function WechatQRButton({ placement = 'top', boxSize = '40px' }) {
  return (
    <Popover trigger="hover" placement={placement} openDelay={100} closeDelay={100}>
      <PopoverTrigger>
        <Box
          as="button"
          type="button"
          aria-label="WeChat"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w={boxSize}
          h={boxSize}
          borderRadius="md"
          border="1px solid"
          borderColor="var(--border-color)"
          color="var(--secondary-text)"
          bg="transparent"
          cursor="pointer"
          transition="all 0.2s ease"
          _hover={{
            color: '#2aae67',
            bg: 'var(--hover-color)',
            borderColor: 'var(--border-strong)',
            transform: 'translateY(-2px)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <FaWeixin size="1.1rem" />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        bg="var(--elevated-bg)"
        borderColor="var(--border-color)"
        borderRadius="10px"
        boxShadow="var(--shadow-card)"
        w="auto"
      >
        <PopoverArrow bg="var(--elevated-bg)" />
        <PopoverBody p={3}>
          <Image src="/wechat-qrcode.png" alt="WeChat QR code" w="220px" borderRadius="8px" />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
