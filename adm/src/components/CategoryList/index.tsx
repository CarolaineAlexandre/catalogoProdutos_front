import React from 'react';
import { Box, Button, List, ListItem, Text } from '@chakra-ui/react';

interface CategoryListProps {
  categories: string[];
  // description: string[];
  onEditCategory: (index: number, newName: string) => void;
  onDeleteCategory: (index: number) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  // description,
  onEditCategory,
  onDeleteCategory,
}) => {
  return (
    <List spacing={3}>
      {categories.map((category, index) => (
        <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
          <Text>{category}</Text>
          {/* <Text>{description}</Text> */}
          <Box>
            <Button size="sm" onClick={() => onEditCategory(index, category)} 
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',}}
            >
              Editar
            </Button>
            <Button size="sm" onClick={() => onDeleteCategory(index)}
            bg={'red'}
            color={'white'}
            _hover={{
              bg: '#c5904A',}}>
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
