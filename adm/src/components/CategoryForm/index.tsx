import React, { useState } from 'react';
import { Box, Button, Center, Input, Stack, Text } from '@chakra-ui/react';

interface CategoryFormProps {
  onCreateCategory: (name: string, description: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onCreateCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };
  const handleCategoryDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryDescription(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (categoryName.trim() === '') {
      return; 
    }

    onCreateCategory(categoryName,categoryDescription);
    setCategoryName('');
    setCategoryDescription('')
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Text fontSize="xl" mb={4}>
        Categorias
      </Text>
      <form onSubmit={handleSubmit}>
        <Center>


        <Stack direction="column" spacing={4} w='50%' >
        <Text>Nome da categoria</Text>
          <Input
            type="text"
            placeholder="Insira o nome da categoria que deseja criar"
            value={categoryName}
            onChange={handleCategoryNameChange}
          />
          <Text>Descrição</Text>
            <Input
            type="text"
            placeholder="Insira a descrição da categoria que deseja criar"
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
          />
          <Button type="submit"
           bg={'#7a5656'}
           color={'white'}
           _hover={{
             bg: '#c5904A',}}>
            Salvar
          </Button>
        </Stack>
        </Center>
      </form>
    </Box>
  );
};

export default CategoryForm;
