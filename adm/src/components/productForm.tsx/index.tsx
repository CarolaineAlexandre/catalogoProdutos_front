import React, { FormEvent, useState, useCallback } from "react";
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
  Grid, // Adicione o Grid
  GridItem, // Adicione o GridItem
} from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  user: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, user }) => {
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

  const handleImageUpload = (acceptedFiles: File[]) => {
    const newPhotos = acceptedFiles.map((file) => URL.createObjectURL(file));
    setProduct({ ...product, photos: [...product.photos, ...newPhotos] });
  };

  const handleRemoveImage = (index: number) => {
    const updatedPhotos = [...product.photos];
    updatedPhotos.splice(index, 1);
    setProduct({ ...product, photos: updatedPhotos });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(product);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setProduct({ ...product, [name]: checked });
  };

  const thumbs = product.photos.map((photo, index) => (
    <Box key={index} mt={4} position="relative">
      <Image src={photo} alt={`Product Image ${index}`} maxH="100px" maxW="100%" />
      <Button
        size="sm"
        colorScheme="red"
        position="absolute"
        top={0}
        right={0}
        onClick={() => handleRemoveImage(index)}
      >
        X
      </Button>
    </Box>
  ));

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
              {/* Outros campos do formulário */}
              <Box mt={4} {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Textarea>
                  Arraste e solte imagens aqui ou clique para fazer o upload.
                </Textarea>
              </Box>
              <VStack mt={2} spacing={2}>
        {thumbs}
      </VStack>
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
        </GridItem>
      </Grid>
      </Box>
      
      <Button mt={4} colorScheme="teal" size="md" type="submit" >
        Cadastrar Produto
            
      </Button>
    </VStack>
  );
};

export default ProductForm;
