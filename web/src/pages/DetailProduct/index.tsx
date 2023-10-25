import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import LayoutProps from '../../components/Layout';

export default function Simple() {
  const product = {
    name: 'Vela',
    price: 350.0,
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
  };

  return (
    <LayoutProps>
    <Container maxW={'7xl'}>
      <VStack
        spacing={4}
        alignItems="start"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box width={{ base: '100%', lg: '40%' }}>
          <img
            src={
              'https://th.bing.com/th/id/R.8a23c29ac48bd82b132ddac728e24449?rik=dmWJK7rpdMKm9w&riu=http%3a%2f%2fnatalia.blog.br%2fwp-content%2fuploads%2f2014%2f12%2fVelas-decorativas-de-Natal-17.jpg&ehk=EWYfVlXbmqjQtAB07X%2bRWPFH%2fGX8M3bDFroY0vOtWZE%3d&risl=&pid=ImgRaw&r=0'
            }
            alt="product image"
            style={{
              maxWidth: '60%',
              height: 'auto',
            }}
          />
        </Box>
        <VStack spacing={4} alignItems="start" width={{ base: '100%', lg: '60%' }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          >
            {product.name}
          </Heading>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize="2xl"
          >
            R${product.price.toFixed(2)} 
          </Text>
          <Text
            color={useColorModeValue('gray.500', 'gray.400')}
            fontSize="xl"
          >
            {product.description}
          </Text>
          <Button 
          background="#7A5656" 
          color="white" 
          _hover={{ bg: '#c5904A' }}
          >
            Tenho Interesse</Button>
        </VStack>
      </VStack>
    </Container>
    </LayoutProps>
  );
}
