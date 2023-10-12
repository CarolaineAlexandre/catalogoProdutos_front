import { Heading, Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import LayoutProps from '../../components/Layout';

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  { id: 1, name: 'Produto 1', category: 'Categoria A' },
  { id: 2, name: 'Produto 2', category: 'Categoria B' },
  { id: 3, name: 'Produto 3', category: 'Categoria A' },
];

function CategoryPage() {
  const { category } = useParams<{ category: string }>();

  // Filtrar os produtos pela categoria selecionada
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <LayoutProps>
    <Heading color={'#c5904A'} alignContent={'flex-start'}  as='h3' size='lg'>catalogo/categoria/ {category}</Heading>
    <hr />
    {filteredProducts.length === 0 ? (
      <Heading mt={4}>Não há produtos cadastrados nesta categoria.</Heading>
    ) : (
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {filteredProducts.map((product) => (
          <GridItem key={product.id} colSpan={1}>
            {product.name}
          </GridItem>
        ))}
      </Grid>
    )}
  </LayoutProps>
  );
}

export default CategoryPage;
