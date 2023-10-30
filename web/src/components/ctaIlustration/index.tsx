import { Button, Flex, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function CtaIlustration() {
  return (
    <Stack background={'rgba(249, 249, 249, 1)'} maxH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}>
            <Text as={'span'} position={'relative'} color={'#7A5656'}>
              A MELHOR COMBINAÇÃO
            </Text>
            <br />
            <Text as={'span'} color={'#7A5656'}>
              PARA VOCÊ
            </Text>
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#7A5656'}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio similique adipisci saepe repudiandae quaerat! Ullam, quo. Quae quaerat libero, illum est repellat, consequatur earum molestias, totam at velit labore.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link as={RouterLink} to="/catalog">
              <Button
                rounded={'base'}
                padding={'5'}
                bg={'#7A5656'}
                color={'white'}
                _hover={{
                  bg: '#c5904A',
                }}
              >
                VER MAIS
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          align={'center'}
          justifyContent={'center'}
          justifyItems={'center'}
          maxHeight={'80vh'}
          alt={'velas aromáticas'}
          objectFit={'cover'}
          src={'./public/img_home.png'}
        />
      </Flex>
    </Stack>
  );
}
