import {
  Container,
  Box,
  Button,
  Text,
  Heading,
  Image,
  VStack,
  useColorModeValue,
  Center,
  Grid,
  GridItem,
  Link,
} from '@chakra-ui/react';
import LayoutProps from '../../components/Layout';
import { useProduct } from '../../hooks/queries/product';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/CarouselCatalog';
 
export default function DetailProduct() {
const {productId} = useParams()
console.log(productId)
  const {
    data: product,
    refetch: refetchCatalog
  } = useProduct(Number(productId));
  console.log(product)
 
  // const product = products;
  // console.log(product)
 
  const linkZap = 'https://api.whatsapp.com/send?phone=+5519993554422&text=Oi+tenho+interesse+no+produto'
  function seeWhatsApp(){
  }
  return (
    <LayoutProps>
<Center>
    {product && (
<Grid templateColumns='repeat(6, 1fr)'>
 
<GridItem colStart={2} colSpan={4}>
 
      <Container maxW={'7xl'} background={'gray.200'} p={4}>
      <VStack
        spacing={4}
        alignItems="start"
        flexDirection={{ base: 'column', lg: 'row' }}
        >
        <Box width={{ base: '100%', lg: '40%' }}>
 
 
        <Carousel
        photo1={product.photo1}
        photo2={product.photo2}
        photo3={product.photo3}
        photo4={product.photo4}
        />
     
 
        </Box>
        <VStack spacing={4} alignItems="start" width={{ base: '100%', lg: '60%' }}>
          <Heading
            lineHeight={1.1}
            fontWeight={500}
            fontSize={{ base: '4xl', sm: '4xl', lg: '6xl' }}
            color={'blackAlpha.900'}
            >
            {product.name}
          </Heading>
       
          <Text
            color={'Red'}
            fontWeight={500}
            fontSize="3xl"
            >
            R${product.price.toFixed(2)}
          </Text>
          <Text
            color={'blackAlpha.700'}
            fontWeight={500}
            fontSize="3xl"
            >
            {product.description}
          </Text>
          <Link href={linkZap} colorScheme="teal">
          <Button
          background="#7A5656"
          color="white"
          _hover={{ bg: '#c5904A' }}
          onClick={()=> {
           
          }}
          >
 
            Tenho Interesse</Button>
           </Link>
        </VStack>
      </VStack>
    </Container>
  </GridItem>
    </Grid>
    )}
    </Center>
    </LayoutProps>
  );
}