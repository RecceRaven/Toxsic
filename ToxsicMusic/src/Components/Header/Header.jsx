import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  Container,
  useColorModeValue,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';

const NavLink = ({ children, href }) => (
  <Link
    px={3}
    py={2}
    rounded={'md'}
    fontFamily='"Roboto", sans-serif' 
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    href={href}>
    {children}
  </Link>
);

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} px={4}>
      <Container maxW='container.xl'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize='lg' fontWeight='bold' color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={4}>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/booking">Booking</NavLink>
              <NavLink href="/portfolio">Portfolio</NavLink>
              <NavLink href="/links">Links</NavLink>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
