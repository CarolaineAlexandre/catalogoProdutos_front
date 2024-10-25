import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useToast
} from "@chakra-ui/react";
import CategoriesFinder from "../CategoryFinder";
import { api } from "../../helpers/axios";
import { useCategories } from "../../hooks/queries/category";
import { useNavigate } from "react-router-dom";


const CategoryFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const toast = useToast()
  const { data: category,
    refetch: refetchCategories
   } = useCategories()
   
   console.log(category)
  function removeCategory(id: number) {
    console.log(id)
    api.delete(`/category/${id}`).then(() => {
      refetchCategories();
      // alert("A categoria de código " + id + " foi deletada com sucesso!");
      toast({
        title: 'Categoria',
        description: "A categoria de código " + id + " foi deletada com sucesso!",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position: 'top'
      })
    })
    .catch((error) => {
      console.error("Erro ao deletar categoria:", error);
      // alert("Erro ao deletar a categoria. Por favor, tente novamente.");
      toast({
        title: 'Categoria',
        description: "Erro ao deletar a categoria. Por favor, tente novamente.",
        status: 'error',
        duration: 1500,
        isClosable: true,
        position: 'top'
      })
    });
  }
  
  const navigate = useNavigate();
  function goToNewCategory() {
    navigate('/categorias')
  } 

  return (
    <Box p="4">

<Flex alignItems={'center'}>

<Heading as="h1" mb="4">
  Lista de Categorias
</Heading>


<Button  
ml={10}
  bg={'#15b097'}
  width={'200px'}
  color={'white'}
  _hover={{
    bg: '#15b097',
  }}
  onClick={goToNewCategory}
  >
  <Flex>
    Cadastrar
  </Flex>
</Button>
</Flex>




      <Flex align="center" mb="4">
      <Box flex="1">
          <Input
            type="text"
            placeholder="Pesquisar categoria por nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
      </Flex>
      {category &&(<CategoriesFinder categories={category} searchTerm={searchTerm} remover={removeCategory}/>)}
    </Box>
  );
};

export default CategoryFilter;
