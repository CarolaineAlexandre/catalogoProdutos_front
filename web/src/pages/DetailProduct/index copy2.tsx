import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/queries/product';
import { Card, Center, Grid, Heading, Image, Text } from '@chakra-ui/react';
import Carousel from '../../components/CarouselCatalog';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  photo: string;
  color: string;
  promotion: boolean;
}

function ProductDetail() {
  const { productId } = useParams()
  const {
    data: product,
    refetch: refetchProduct
  } = useProduct(Number(productId))
  console.log(product)

  // const product = productList

  return (

    <div>
      {product && (
      <Center>
        <Grid >
          <Card padding={'120px'}>
            <Heading>{product.name}</Heading>
            {/* <Image src={product.photo1} alt={product.name} /> */}
            <Carousel
            photo1={product.photo1}
            photo2={product.photo2}
            photo3={product.photo3}
            photo4={product.photo4}
            />
            <Text>Cor: {product.color}</Text>
            <Text>Preço: R${product.price}</Text>
            <Text>Descrição: {product.description}</Text>
            {product.promotion && <Text>Está na promoção!</Text>}
          </Card>
        </Grid>
      </Center>
      )}
    </div>
  );
};
export default ProductDetail;

