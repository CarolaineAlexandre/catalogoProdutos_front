import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

export default function LoginProps() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('#7a5656', '#7a5656')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', '#7a5656')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        
          <Image  maxWidth={'30vh'} 
          maxHeight={'30vh'} paddingStart={'50px'}
          src={'public/logo.png'}/>

        <FormControl id="email" isRequired>
          <FormLabel>Usuário</FormLabel>
          <Input
            placeholder="insira o e-mail"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',
            }}>
            Login
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}