import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input
} from "@chakra-ui/react";
import Category_dropdown from "../Category_dropdown";
import { useCategories } from "../../hooks/queries/category";
import { useProducts } from "../../hooks/queries/products";
import ProductsFinder from "../ProductsFinder";
import { api } from "../../helpers/axios";


const ProductFilter = () => {
  const [selectCategory, setSelectCategory] = useState(0)
  const [searchTerm, setSearchTerm] = useState("");

  const { data: category } = useCategories()
  const { data: product,
    refetch: refetchProdutos
   } = useProducts()
   
   console.log(product)
  function removerProduto(id: number) {
    api.delete(`/product/${id}`).then(() => {
      refetchProdutos();
      alert("Produto código " + id + " deletado com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao deletar produto:", error);
      alert("Erro ao deletar o produto. Por favor, tente novamente.");
    });
  }

 


  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Lista de Produtos
      </Heading>
      <Flex align="center" mb="4">
      <Box flex="1">
          <Input
            type="text"
            placeholder="Pesquisar vela por nome"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Box flex="1" mr="2">
        {
              category &&
              (<Category_dropdown category={category} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
              )}
        </Box>


      </Flex>
      {product &&(<ProductsFinder products={product} categoryFilter={selectCategory} searchTerm={searchTerm} remover={removerProduto}/>)}
    </Box>
  );
};

export default ProductFilter;
