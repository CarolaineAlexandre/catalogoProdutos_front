'use client'

import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function AboutProps() {
  return (
    <Stack  background={'rgba(249, 249, 249, 1)'} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={5} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '2xl', lg: '3xl' }}>
          <Text
              as={'span'}
              position={'relative'}
              color={'#7A5656'}
              >
                QUEM SOMOS
            </Text>
            <br />{' '}
            
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'rgba(64, 64, 64, 1)'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio similique adipisci saepe repudiandae quaerat! Ullam, quo. Quae quaerat libero, illum est repellat, consequatur earum molestias, totam at velit labore.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image 
        h={'120%'}
        align={'center'} 
        justifyContent={'center'}
        justifyItems={'center'}
          alt={'Sobre nós'}
          objectFit={'cover'}
          src={
            './public/sobreNos.png'
          }
        />
      </Flex>
    </Stack>
  )
}