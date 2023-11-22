import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input
} from "@chakra-ui/react";
import Category_dropdown from "../Category_dropdown";
import { useCategories } from "../../hooks/queries/category";
import { useProducts } from "../../hooks/queries/products";
import ProductsFinder from "../ProductsFinder";
import { api } from "../../helpers/axios";
import { useNavigate } from "react-router-dom";


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

  const navigate = useNavigate();

  function goToNewProduct() {
    navigate('/produtos')
  } 
 


  return (
    <Box p="4">
      <Flex alignItems={'center'}>

          <Heading as="h1" mb="4">
            Lista de Produtos
          </Heading>


          <Button  
          ml={10}
            bg={'#15b097'}
            width={'200px'}
            color={'white'}
            _hover={{
              bg: '#15b097',
            }}
            onClick={goToNewProduct}
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
