import {
  Box,
  HStack,

  Image,
} from '@chakra-ui/react'





const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      backgroundColor="#7A5656"
      color="white"
     
      textAlign="center"
    >
      <HStack justify="center" align="center">
      <Image
          src={'/logo_rodape.png'}
          alt="Logo"
          width="100px"
          marginTop={'-15px'}
        />
        </HStack >
       
    </Box>
  );
};

export default Footer;
