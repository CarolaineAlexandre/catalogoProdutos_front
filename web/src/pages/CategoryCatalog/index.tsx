import { Heading, Grid, Text, Box, Flex, Card } from '@chakra-ui/react';
import LayoutProps from '../../components/Layout2';
import { useProductByCategory } from '../../hooks/queries/catalogCategory';
import { useNavigate, useParams } from 'react-router-dom';
import Carousel from '../../components/CarouselCatalog';

interface ICategory {
  id: number;
  name: string;
  description: string;
  price: number;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
}

export default function CategoryPage() {
  const { category } = useParams();
  const { data: catalogList } = useProductByCategory(Number(category));

  const navigate = useNavigate();
  const handleButtonClick = (id:any) => {
    navigate(`/product/${id}`);
  };
  
  return (
    <LayoutProps>
      <Box padding="20px">
        <Heading color="#c5904A" as="h3" size="lg" mb="20px">
          catálogo/categoria/{category}
        </Heading>
        {!catalogList ? (
          <Text>Não há produtos nessa categoria</Text>
        ) : (
          <Grid templateColumns="repeat(1, 1fr)" gap={5}>
            {catalogList.map((catalog: ICategory) => (
              <Card key={catalog.id} onClick={() => {handleButtonClick(catalog.id)}}>
                <Flex flexDirection="column">
                  <Box mt="20px" display="flex" alignItems="center">
                  <Carousel
                      photo1={catalog.photo1}
                      photo2={catalog.photo2}
                      photo3={catalog.photo3}
                      photo4={catalog.photo4}
                    />
                    <Box ml="20px">
                      <Text fontSize="40px" fontWeight="bold">
                        {catalog.name}
                      </Text>
                      <Text fontSize="25px" color="grey">
                        Preço: R${catalog.price}
                      </Text>
                      <Text fontSize="20px">Descrição: {catalog.description}</Text>
                    </Box>
                  </Box>
                </Flex>
              </Card>
            ))}
          </Grid>
        )}
      </Box>
    </LayoutProps>
  );
}
