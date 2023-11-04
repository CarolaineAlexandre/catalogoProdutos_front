import { useProduct } from '../../hooks/queries/product';
import { Card, Grid, Heading, Image, Text } from '@chakra-ui/react';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageSrc: string;
}

function ProductDetail(){
  const {
    data: productList, 
    refetch: refetchProduct
  } = useProduct()
  console.log(productList)
  
  const product = productList 

  return (
    
    <div>
      {productList && (
     <Grid>
          <Card>
            <Heading>{product.name}</Heading>
            <Image src={product.imageSrc} alt={product.name} />
            <Text>Preço: R${product.price}</Text>
            <Text>Descrição: {product.description}</Text>
          </Card>
</Grid>
      
          )}
    </div>
  );
};
export default ProductDetail;

