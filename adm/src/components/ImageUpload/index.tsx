import React, { useCallback } from "react";
import { Box, Text, useToast } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const toast = useToast();

  const onDrop = useCallback(
    (acceptedFiles: string | any[]) => {
      if (acceptedFiles.length === 1) {
        onImageUpload(acceptedFiles[0]);
      } else {
        toast({
          title: "Erro",
          description: "Por favor, faça o upload de uma única imagem.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    },
    [onImageUpload, toast]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps({
        className: "dropzone",
      })}
      p={4}
      borderWidth={1}
      borderRadius="md"
      shadow="md"
      w="100%"
      textAlign="center"
      cursor="pointer"
    >
      <input {...getInputProps()} />
      <Text>Arraste e solte uma imagem aqui ou clique para fazer o upload.</Text>
    </Box>
  );
};

export default ImageUpload;
