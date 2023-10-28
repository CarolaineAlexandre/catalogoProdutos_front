import React, { FormEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Textarea,
  VStack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

// Define as props para o componente ProductForm
interface ProductFormProps {
  onSubmit: (product: Product) => void; // Função para lidar com o envio do formulário
  user: string; // Nome do usuário
}

// Cria o componente ProductForm
const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, user }) => {
  // Inicializa o estado para os campos do formulário do produto
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    category: "",
    description: "",
    color: "",
    price: 0,
    isPromotional: false,
    createdAt: new Date(),
    createdBy: user,
    updatedAt: new Date(),
    validity: new Date(),
    photos: [],
  });

  // Lida com o envio de imagens e adiciona URLs ao produto
  const handleImageUpload = (acceptedFiles: File[]) => {
    const newPhotos = acceptedFiles.map((file) => URL.createObjectURL(file));
    setProduct({ ...product, photos: [...product.photos, ...newPhotos] });
  };

  // Remove uma imagem do produto
  const handleRemoveImage = (index: number) => {
    const updatedPhotos = [...product.photos];
    updatedPhotos.splice(index, 1);
    setProduct({ ...product, photos: updatedPhotos });
  };

  // Lida com o envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(product);
  };

  // Lida com as mudanças nos campos de entrada
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Lida com as mudanças nas caixas de seleção
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setProduct({ ...product, [name]: checked });
  };

  // Exibe miniaturas de imagens lado a lado com a capacidade de removê-las
  const thumbs = product.photos.map((photo, index) => (
    <Box key={index} display="inline-block" mr={2}>
      <Image src={photo} alt={`Imagem do Produto ${index}`} maxH="80px" maxW="80px" />
      <Button
        size="sm"
        colorScheme="red"
        mt={2}
        onClick={() => handleRemoveImage(index)}
      >
        Remover
      </Button>
    </Box>
  ));

  // Usa a biblioteca react-dropzone para lidar com uploads de arquivos
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleImageUpload,
    // accept: "image/*",
  });

  return (
    <VStack spacing={4} alignItems="center">
      <Box p={8} borderWidth={1} borderRadius="lg" shadow="lg">
        <Grid templateColumns={["1fr", "1fr 1fr"]} gap={4} w="100%">
          <GridItem colSpan={1}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Nome do Produto</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Categoria do Produto</FormLabel>
                <Input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Preço do Produto</FormLabel>
                <Input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleInputChange}
                />
              </FormControl>
            </form>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Promocional</FormLabel>
              <Checkbox
                name="isPromotional"
                isChecked={product.isPromotional}
                onChange={handleCheckboxChange}
              />
            </FormControl>
            <Box mt={4} {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <Textarea>
                Arraste e solte imagens aqui ou clique para fazer o upload.
              </Textarea>
            </Box>
            <VStack mt={2} spacing={2}>
              {thumbs}
            </VStack>
          </GridItem>
        </Grid>
      </Box>

      <Button  mt={4}  bg={'#7a5656'} size="md" type="submit" color={'white'}
       _hover={{
        bg: '#c5904A',}}>
        Cadastrar Produto
      </Button>
    </VStack>
  );
};

export default ProductForm;
