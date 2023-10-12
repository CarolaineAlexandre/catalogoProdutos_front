'use client'

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsPerson,  } from 'react-icons/bs'
import LayoutProps from '../../components/Layout'
import { FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <LayoutProps>

    <Container bg="rgba(249, 249, 249, 1)" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="#7A5656"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                <Box>
                  <Heading>Contato</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #c5904A' }}
                        leftIcon={<MdPhone color="white" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #c5904A' }}
                        leftIcon={<MdEmail color="white"size="20px" />}>
                        webvela@abc.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="white"
                        _hover={{ border: '2px solid #c5904A' }}
                        leftIcon={<MdLocationOn color="white" size="20px" />}>
                        Indaiatuba, SP
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                    //   bgColor={'white'}
                      color={'rgba(215, 215, 215, 1)'}
                      _hover={{ bg: '#c5904A' }}
                      icon={<MdFacebook size="28px" />}
                      />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      color={'rgba(215, 215, 215, 1)'}
                      _hover={{ bg: '#c5904A' }}
                      icon={<FaInstagram size="28px" />}
                      />
                    {/* <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      color={'rgba(215, 215, 215, 1)'}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsDiscord size="28px" />}
                      /> */}
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nome</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>E-mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Messagem</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Escreva sua mensagem"
                            />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#89836D" color="white"  _hover={{ bg: '#c5904A' }}>
                          Enviar
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
</LayoutProps>
  )
}