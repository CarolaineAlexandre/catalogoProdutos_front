import React, { useState } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';

interface CategoryFormProps {
  onCreateCategory: (name: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onCreateCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (categoryName.trim() === '') {
      return; 
    }

    onCreateCategory(categoryName);
    setCategoryName('');
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Text fontSize="xl" mb={4}>
        Categorias
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={4}>
          <Input
            type="text"
            placeholder="Insira o nome da categoria que deseja criar"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
          <Button type="submit"
           bg={'#7a5656'}
           color={'white'}
           _hover={{
             bg: '#c5904A',}}>
            Salvar
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CategoryForm;
