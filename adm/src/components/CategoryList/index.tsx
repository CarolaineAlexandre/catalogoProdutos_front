import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input
} from "@chakra-ui/react";
import CategoriesFinder from "../CategoryFinder";
import { api } from "../../helpers/axios";
import { useCategories } from "../../hooks/queries/category";


const CategoryFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: category,
    refetch: refetchCategories
   } = useCategories()
   
   console.log(category)
  function removeCategory(id: number) {
    console.log(id)
    api.delete(`/category/${id}`).then(() => {
      refetchCategories();
      alert("A categoria de código " + id + " foi deletada com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao deletar categoria:", error);
      alert("Erro ao deletar a categoria. Por favor, tente novamente.");
    });
  }

  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Lista de Categorias
      </Heading>
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
