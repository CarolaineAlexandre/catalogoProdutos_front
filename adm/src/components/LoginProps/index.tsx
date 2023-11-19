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
import { useState } from 'react'
import { api } from '../../helpers/axios'
import { useNavigate } from 'react-router-dom'
import { useMutateLogin } from '../../hooks/mutations/login'
import { response } from 'express';
import { useToast } from '@chakra-ui/react';

 interface ILogin {
  email:string
  password:string
 }

export default function LoginProps() {

  const [inputEmail,setInputEmail] = useState('')
  const [inputPassword,setInputPassword] = useState('')
  const navigate = useNavigate();
  const toast = useToast()

  const {mutate: mutateLogin, isError, error } = useMutateLogin()

  function Login(){    
   if(inputEmail != '' && inputPassword != ''){
    const newLogin: ILogin = {
      email: inputEmail,
      password: inputPassword
    }
    mutateLogin(newLogin, {
      onSuccess: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.user.id);
        setInputEmail('');
        setInputPassword('');
        toast({
          title: 'Login',
          description: "Login efetuado com sucesso",
          status: 'success',
          duration: 1500,
          isClosable: true,
          position: 'top'
        })
        navigate('/home')
      },
      onError: (error: any) => {
        setInputPassword('');
        toast({
          title: 'Login',
          description: "Senha ou Login incorreto",
          status: 'error',
          duration: 1500,
          isClosable: true,
          position: 'top'
        })
      }
    })  
  } 
}


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
        bg={useColorModeValue('white', 'white')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        
          <Image  maxWidth={'30vh'} 
          maxHeight={'30vh'} paddingStart={'50px'}
          src={'public/logo.png'}/>

        <FormControl id="email" isRequired>
          <FormLabel color={'blackAlpha.900'}>Usuário</FormLabel>
          <Input
           border='1px solid #7a5656'
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            color='blackAlpha.900'
            type="email"
            placeholder="insira o e-mail"
            _placeholder={{color:'gray'}}
            />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel color={'blackAlpha.900'}>Senha</FormLabel>
          <Input type="password" 
            color='blackAlpha.900'
            border='1px solid #7a5656'
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="insira a senha"
            _placeholder={{color:'gray'}}
            />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={Login}
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
