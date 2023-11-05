import { useProduct } from '../../hooks/queries/product';
import { Card, Center, Grid, Heading, Image, Text } from '@chakra-ui/react';

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
  const {
    data: productList,
    refetch: refetchProduct
  } = useProduct()
  console.log(productList)

  const product = productList

  return (

    <div>
      {productList && (
      <Center>
        <Grid >
          <Card padding={'120px'}>
            <Heading>{product.name}</Heading>
            <Image src={product.photo} alt={product.name} />
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

