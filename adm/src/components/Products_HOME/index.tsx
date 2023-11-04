import {Button, Stack, Center, Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default function Products() {
  return (
  
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        bg={'white'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading color={'#7a5656'} lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Produtos
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          color={'#000000'}
          margin={'50px'}>
         Cadastre, consulte ou edite os produtos do catálogo.
        </Center>
        
        <Link to={"/listarProdutos"}> 
        <Stack spacing={6}>
          <Button
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',
            }}>
            VER MAIS
          </Button>
          </Stack>
          </Link>
      </Stack>
  
  )
}