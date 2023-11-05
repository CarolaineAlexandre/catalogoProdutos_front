import { Box, Button, Center, Flex, Image, Text, extendTheme } from '@chakra-ui/react';
import { useCategory } from '../../hooks/queries/category';
import { useNavigate } from 'react-router-dom';

export interface ICatalog {
  id: number;
  photo: string;
  name: string;
  description: string;
}

function CatalogItem({ id, photo, name, description }: ICatalog) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/catalog/category/${id}`);
  };

  return (
    <Flex justify="center" align="center" margin={'3%'}>
      <Center p="6" flexDirection="column" bg="gray.1000" rounded="lg" boxShadow="md" minH="250px">
        <Image src={photo} alt={`categoria ${name}`} w="100px" h="100px" />
        <Text mt="3" fontWeight="bold" fontSize="15px">
          {description}
        </Text>
        <Button
          mt="3"
          bg={'#7A5656'}
          color={'white'}
          fontWeight={'bold'}
          width={'100%'}
          _hover={{
            bg: '#c5904A',
          }}
          onClick={handleButtonClick}
        >
          {name}
        </Button>
      </Center>
    </Flex>
  );
}

function CatalogProps() {
  const { data: categoryList, refetch: refetchCategory } = useCategory();

  if (!categoryList) {
    return <div>Loading...</div>;
  }

  return (
    <Flex flexWrap="wrap" justify="center"> {/* Centralize horizontalmente */}
      {categoryList.map((category: {
        description: string;
        name: string; 
        id: number; 
        photo: string; 
        category: string; 
      }) => (
        <CatalogItem
          key={category.id}
          id={category.id}
          photo={category.photo}
          name={category.name} 
          description={category.description}
        />
      ))}
    </Flex>
  );
}

export default CatalogProps;
