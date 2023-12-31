import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Input,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react'
  
  import { GiHamburgerMenu } from 'react-icons/gi'
  import { AiOutlineClose } from 'react-icons/ai'
  import { Link } from 'react-router-dom'
import { SearchIcon } from '@chakra-ui/icons'
  
  interface Props {
    children: React.ReactNode
  }
  
  const Links = [
      {href: '/', texto: 'Home'},
      {href: '/catalog', texto: 'Catálogo'},
      {href: '/about', texto: 'Sobre'},
      {href: '/contact', texto: 'Contato'}
  ]
  
  const NavLink = (props: Props) => {
    const { children } = props
  
    return (
      <Box
        margin={'30px'}
        fontSize={'larger'}
        fontStyle={'inherit'}
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          fontStyle: 'bold',
          color: '#c5904A'
        }}
        href={'#'}>
        {children}
      </Box>
      
    )
  }
  
  export default function NavBarProps() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
       {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}> */}
        <Box px={8} bg={useColorModeValue('#F9F9F9', '#F9F9F9')} color={'#7A5656'} > 
          <Flex h={'auto'} alignItems={'center'} justifyContent={'space-around'} minWidth={'max-content'} >
            <IconButton
              size={'xl'}
              icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
              aria-label={'Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              

            />
           
            <HStack spacing={5} alignItems={'center'} 
            height={'80px'}
            justifyContent={'center'} >
              <img></img>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Link to={link.href}> 
                  <NavLink key={link.texto}>{link.texto}</NavLink>
                  </Link>
                ))}
                {/* input para pesquisar conteúdo */}
                <InputGroup size='md' >
                <Input placeholder='O que você procura?' size='md' borderColor={'#7A5656'}/>
                <InputRightElement width='4.5rem'>
                    <SearchIcon  h='1.75rem'>
                    </SearchIcon>
                </InputRightElement>
                </InputGroup>                
              </HStack>
            </HStack>
          </Flex>
          
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <Link to={link.href}>
                  <NavLink key={link.texto}>{link.texto}</NavLink>
                  </Link>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    )
  }