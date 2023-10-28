import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Select,
  Input,
  Checkbox,
  List,
  ListItem,
  Text,
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

const initialProduct = {
  id: 0,
  name: "",
  category: "",
  price: 0,
  isPromotional: false,
};

const initialProducts = [
  { id: 1, name: "Vela 1", category: "Velas aromáticas", price: 23, isPromotional: true },
  { id: 2, name: "Vela 2", category: "Velas aromáticas", price: 23, isPromotional: false },
  { id: 3, name: "Vela 3", category: "Velas aromáticas", price: 23, isPromotional: false },
  { id: 4, name: "Vela 4", category: "Velas aromáticas", price: 23, isPromotional: true },
];

const ProductList = () => {
  const { isOpen: isEditModalOpen, onOpen: onEditModalOpen, onClose: onEditModalClose } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpen: onDeleteModalOpen, onClose: onDeleteModalClose } = useDisclosure();
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [priceFilter, setPriceFilter] = useState("");
  const [promoFilter, setPromoFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [products, setProducts] = useState(initialProducts);

  const filteredProducts = products
    .filter((product) =>
      categoryFilter === "Todas" ? true : product.category === categoryFilter
    )
    .filter((product) =>
      priceFilter ? product.price <= parseInt(priceFilter) : true
    )
    .filter((product) =>
      promoFilter ? product.isPromotional === true : true
    )
    .filter((product) =>
      searchTerm
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true
    );

  const handleEditProduct = () => {

  };

  const handleDeleteProduct = (product: React.SetStateAction<{ id: number; name: string; category: string; price: number; isPromotional: boolean; }>) => {
    setSelectedProduct(product);
    onDeleteModalOpen();
  };


  const handleConfirmDelete = () => {
    // Remove o produto da lista de produtos com base no ID selecionado
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== selectedProduct.id));
    onDeleteModalClose();
  };

  return (
    <Box p="4">
      <Heading as="h1" mb="4">
        Lista de Produtos
      </Heading>
      <Flex align="center" mb="4">
        <Box flex="1" mr="2">
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Velas aromáticas">Velas aromáticas</option>
          </Select>
        </Box>
        <Box flex="1" mr="2">
          <Input
            type="number"
            placeholder="Preço Máximo"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </Box>
        <Box flex="1" mr="2">
          <Checkbox
            isChecked={promoFilter}
            onChange={(e) => setPromoFilter(e.target.checked)}
          >
            Em Promoção
          </Checkbox>
        </Box>
        <Box flex="1">
          <Input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
      </Flex>
      <List spacing={3}>
        {filteredProducts.map((product) => (
          <ListItem key={product.id}>
            <Flex justify="space-between">
              <Text>
                <strong>{product.name}</strong> - Categoria: {product.category} - Preço: R$ {product.price} - {product.isPromotional ? "Em Promoção" : "Sem Promoção"}
              </Text>
              <Flex>
                <Button colorScheme="teal" size="sm">
                  Editar
                </Button>
                <Button colorScheme="red" size="sm" onClick={() => handleDeleteProduct(product)}>
                  Apagar
                </Button>
              </Flex>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Modal isOpen={isEditModalOpen} onClose={onEditModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Produto</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Formulário de edição do produto */}
            <Input
              type="text"
              name="name"
              value={selectedProduct.name}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            />
            {/* Adicione outros campos de edição aqui */}
          </ModalBody>
        </ModalContent>
      </Modal>
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

export default ProductList;
