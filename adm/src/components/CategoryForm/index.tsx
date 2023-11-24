import React, { useState } from 'react';
import { Box, Button, Center, Input, Stack, Text } from '@chakra-ui/react';
import { api } from '../../helpers/axios';
import { useCreateCategory } from '../../hooks/mutations/category';


function CategoryForm (){
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [urlAws, setUrlAws] = useState('');
  const [uploadSucesso, setUploadSucesso] = useState(false);

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };
  const handleCategoryDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryDescription(event.target.value);
  };
  const handleCategoryImageChange = (event: any) => {
    setCategoryImage(event.target.files[0]);
  };

    const handleUpload = () => {
      const formData = new FormData();
      formData.append('file', categoryImage);
      api.post('/photo/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log('Imagem enviada com sucesso:', response.data);
        setUrlAws(response.data.urlPhotoAws)
        console.log("🚀 ~ file: index.tsx:35 ~ .then ~ response.data.urlPhotoAws:", urlAws)
        setUploadSucesso(true);
      })
      .catch((error) => {
        console.error('Erro ao enviar a imagem:', error);
      });
    };

  const { mutate: mutateCreateCategory } = useCreateCategory()

  function createCategory() {
    if (categoryName != '' && categoryDescription != ''){
      
      const create = {
        name: categoryName,
        description: categoryDescription,
        photo: urlAws 
      } 
      mutateCreateCategory(create,{
        onSuccess:(_data) => {
          setCategoryName('')
          setCategoryDescription('')
          setCategoryImage('')
          setUploadSucesso(true);
        },
        onError:(erro) =>{
          console.log(erro)
          alert("Erro ao criar categoria")
        }
      })
    }
  }


  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Text fontSize="xl" mb={4}>
        Categorias
      </Text>
      <form>
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
          <Text>Imagem</Text>
            <Input
            type="file"        
            onChange={handleCategoryImageChange}
          />
          <Button
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',}}
              onClick={handleUpload}>
            Confirmar Foto
          </Button>

          <Button
            onClick={createCategory}
            bg={'#7a5656'}
            color={'white'}
            _hover={{
              bg: '#c5904A',
            }}
            style={{ display: uploadSucesso ? 'block' : 'none' }}
            >
              Salvar
            </Button>
        </Stack>
        </Center>
      </form>
    </Box>
  );
};

export default CategoryForm;
