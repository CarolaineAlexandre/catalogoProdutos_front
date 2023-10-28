// src/App.tsx
import React, { useState } from 'react';
import { Box, Button, ChakraProvider, extendTheme, Input, Stack } from '@chakra-ui/react';
import CategoryList from './../../components/EditCategory/CategoryList/index';
import CategoryForm from './../../components/EditCategory/CategoryForm/index';
import LayoutProps from '../../components/Layout';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: '2',
      },
    },
  },
});

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleCreateCategory = (name: string) => {
    setCategories([...categories, name]);
  };

  const handleEditCategory = (index: number, newName: string) => {
    setEditIndex(index);
    setNewCategoryName(newName);
  };

  const handleUpdateCategory = () => {
    if (editIndex !== null) {
      const updatedCategories = [...categories];
      updatedCategories[editIndex] = newCategoryName;
      setCategories(updatedCategories);
      setEditIndex(null);
      setNewCategoryName('');
    }
  };

  const handleDeleteCategory = (index: number) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <ChakraProvider theme={theme}>
      <LayoutProps>

      <Box textAlign="center" p={4}>
        <CategoryForm onCreateCategory={handleCreateCategory} />
        <CategoryList
          categories={categories}
          onEditCategory={handleEditCategory}
          onDeleteCategory={handleDeleteCategory}
        />
        {editIndex !== null && (
          <Stack direction="row" alignItems="center">
            <Input
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="Insira aqui o novo nome da categoria"
              />
            <Button onClick={handleUpdateCategory}
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',}}>
              Atualizar
            </Button>
          </Stack>
        )}
      </Box>
            </LayoutProps>
    </ChakraProvider>
  );
}

export default App;
