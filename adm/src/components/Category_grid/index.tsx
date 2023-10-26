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
} from "@chakra-ui/react";

const products = [
  { id: 1, name: "Vela 1", category: "Velas aromáticas", price: 23, isPromotional: true },
  { id: 2, name: "Vela 2", category: "Velas aromáticas", price: 23, isPromotional: false },
  { id: 3, name: "Vela 3", category: "Velas aromáticas", price: 23, isPromotional: false },
  { id: 4, name: "Vela 4", category: "Velas aromáticas", price: 23, isPromotional: true },
];

const ProductList = () => {
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [priceFilter, setPriceFilter] = useState("");
  const [promoFilter, setPromoFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
            <Text>
              <strong>{product.name}</strong> - Categoria: {product.category} - Preço: R$ {product.price} - {product.isPromotional ? "Em Promoção" : "Sem Promoção"}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductList;
