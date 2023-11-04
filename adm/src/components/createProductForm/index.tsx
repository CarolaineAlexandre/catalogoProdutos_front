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
  Select,
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



  return (
    <Box pl="1rem" pr="1rem" pt="2rem" pb="1rem" margin="1rem">
    <FormControl>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormLabel>Nome do Produto</FormLabel>
          <Input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
          <FormLabel>Descrição</FormLabel>
          <Input
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
          <FormLabel>Fotos do Produto</FormLabel>
          <div style={{ margin: '0.5rem 0' }}>
          <input type="file" accept="image/png, image/jpeg, image/gif" />
          </div>
          <div style={{ margin: '0.5rem 0' }}>
          <input type="file" accept="image/png, image/jpeg, image/gif" />
          </div>
          <div style={{ margin: '0.5rem 0' }}>
          <input type="file" accept="image/png, image/jpeg, image/gif" />
          </div>
          <div style={{ margin: '0.5rem 0' }}>
          <input type="file" accept="image/png, image/jpeg, image/gif" />
          </div>
          
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel>Categoria</FormLabel>
          <Select placeholder="Selecione a categoria">
            <option value="option1">Categoria 1</option>
            <option value="option2">Categoria 2</option>
            <option value="option3">Categoria 3</option>
          </Select>
          <FormLabel>Cor</FormLabel>
          <Input
            type="text"
            name="color"
            value={product.color}
            onChange={handleInputChange}
          />

          <FormLabel>Data de Validade</FormLabel>
          <Input placeholder="Selecione a data" size="md" type="date" />
          
          <FormLabel>Preço</FormLabel>
          <Input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />

          <FormLabel>Em promoção?</FormLabel>
          <Checkbox
            name="isPromotional"
            isChecked={product.isPromotional}
            onChange={handleCheckboxChange}
          />
        </GridItem>

        <GridItem colSpan={3}>
        <Box textAlign="center">
          <Button
            mt={4}
            bg={'#7a5656'}
            size="md"
            type="submit"
            color={'white'}
            _hover={{
              bg: '#c5904A',
            }}
          >
            Salvar
          </Button>
        </Box>
      </GridItem>
      </Grid>
    </FormControl>
    </Box>
  );
};

export default ProductForm;
