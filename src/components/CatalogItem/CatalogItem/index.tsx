import { Box, Button, Image, Text } from '@chakra-ui/react';

// Definição das propriedades que este componente espera
interface CatalogItemProps {
  imageSrc: string; // Fonte da imagem do item
  category: string; // Categoria do item
}

// Definição do componente CatalogItem
function CatalogItem({ imageSrc, category }: CatalogItemProps) {
  return (
    <Box textAlign="center" p="4">
      {/* Renderiza uma imagem com a fonte especificada */}
      <Image src={imageSrc} alt={`Produto ${category}`} maxW="100%" />
     
      {/* Renderiza um botão com a categoria do item */}
      <Button
        fontWeight="bold"
        bg={'rgba(122, 86, 86, 1)'}
        color={'white'}
        w={'80%'}
        _hover={{
          bg: '#c5904A',
        }}
      >
        {category}
      </Button>

      {/* Renderiza um texto em branco (atualmente vazio, você pode adicionar conteúdo apropriado aqui) */}
      <Text fontWeight="bold"></Text>
    </Box>
  );
}

// Exporta o componente CatalogItem
export default CatalogItem;
