import { Image, Box } from "@chakra-ui/react";

interface ProductImageProps {
  imageUrl: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
  return (
    <Box>
      <Image src={imageUrl} alt="Product" />
    </Box>
  );
};

export default ProductImage;
