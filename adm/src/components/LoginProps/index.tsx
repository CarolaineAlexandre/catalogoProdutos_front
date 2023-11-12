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

 interface ILogin {
  email:string
  password:string
 }

export default function LoginProps() {

  const [inputEmail,setInputEmail] = useState('')
  const [inputPassword,setInputPassword] = useState('')
  const navigate = useNavigate();

  function Login(){
   if(inputEmail != '' && inputPassword != ''){
    const newLogin: ILogin = {
      email: inputEmail,
      password: inputPassword
    }
   api.post('/auth',newLogin).then(response => {
      setInputEmail('');
      setInputPassword('');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user.id);
      if(response.status == 200){
        navigate('/home')
      }else{
      }
    }).catch((erro)=>{
      alert("Erro no login")
      console.log(erro)
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
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="insira o e-mail"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
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
