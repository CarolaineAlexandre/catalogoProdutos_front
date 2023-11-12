import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Checkbox,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Category_dropdown from "../Category_dropdown";
import { useCategories } from "../../hooks/queries/category";
import { useProducts } from "../../hooks/queries/products";
import ProductsFinder from "../ProductsFinder";




const initialProduct = {
  id: 0,
  name: "",
  category: "",
  price: 0,
  isPromotional: false,
};


const ProductFilter = () => {
  const { isOpen: isDeleteModalOpen, onOpen: onDeleteModalOpen, onClose: onDeleteModalClose } = useDisclosure();
  const [selectCategory, setSelectCategory] = useState(0)
  const [promoFilter, setPromoFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  const { data: category } = useCategories()
  const { data: product } = useProducts()


  const handleDeleteProduct = (product: React.SetStateAction<{ id: number; name: string; category: string; price: number; isPromotional: boolean; }>) => {
    //setSelectedProduct(product);
    onDeleteModalOpen();
  };


  const handleConfirmDelete = () => {
    // Remove o produto da lista de produtos com base no ID selecionado
    onDeleteModalClose();
  };

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
        <Box flex="1" mr="2" paddingLeft="8px">
          <Checkbox
            isChecked={promoFilter}
            onChange={(e) => setPromoFilter(e.target.checked)}
          >
            Em Promoção
          </Checkbox>
        </Box>
        <Box flex="1" mr="2">
        {
              category &&
              (<Category_dropdown category={category} selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
              )}
        </Box>


      </Flex>
      {product &&(<ProductsFinder products={product} categoryFilter={selectCategory} promoFilter={promoFilter} searchTerm={searchTerm}/>)}
      
      <Modal isOpen={isDeleteModalOpen} onClose={onDeleteModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Apagar Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Tem certeza de que deseja apagar o produto: {selectedProduct.name}?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={handleConfirmDelete}>
              Apagar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductFilter;
