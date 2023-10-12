import { Box, SimpleGrid } from '@chakra-ui/react';
import CatalogItem from '../CatalogItem'; // Importa o componente CatalogItem

export default function Catalog() {
  
  const catalogData = [
    { id: 1, imageSrc: 'web/public/catalogo.png', category: "velas aromaticas" },
    { id: 2, imageSrc: 'web/public/catalogo1.png', category: "velas aromaticas" },
    { id: 3, imageSrc: 'web/public/catalogo2.png', category: "velas aromaticas" },
    { id: 4, imageSrc: 'web/public/catalogo.png', category: "velas aromaticas" },
    { id: 5, imageSrc: 'web/public/catalogo1.png', category: "velas aromaticas" },
    { id: 6, imageSrc: 'web/public/catalogo2.png', category: "velas aromaticas" },
  ];

  return (
    
    <Box p="3" alignItems={'center'} alignContent={'center'} bg={'rgba(249, 249, 249, 1)'}>
      {/* Grade de itens do catálogo */}
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing="3">
        {/* Mapeia os dados do catálogo para renderizar os itens */}
        {catalogData.map((item) => (
          // Renderiza um item do catálogo usando o componente CatalogItem
          <CatalogItem
            key={item.id}          // Chave única para cada item
            imageSrc={item.imageSrc}  // Fonte da imagem 
            category={item.category}  // Categoria do item
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
