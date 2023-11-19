import React from 'react';
import { Box, Text, Button, Center, HStack, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface ContactInfoProps {
  phoneNumber: string;
  email: string;
  address: string;
}

const ContactProps: React.FC<ContactInfoProps> = ({ phoneNumber, email, address }) => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=5519999244001&text=Ol%C3%A1%0AGostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos";
  };

  return (
    <Center>
      <Box
        p={10}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        maxW="md"
        textAlign="center"
        bg="#7A5656" // Cor de fundo
        color="#F9F9F9" // Letras claras
      >
        <Text fontSize="2xl" fontWeight="bold">
          Número de Telefone:
        </Text>
        <Text fontSize="xl" mb={4}>
          {phoneNumber}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Email:
        </Text>
        <Text fontSize="xl" mb={4}>
          {email}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          Endereço:
        </Text>
        <Text fontSize="xl" mb={4}>
          {address}
        </Text>
        <Center>    
        <HStack spacing={4}>
          <a href="https://www.facebook.com/">
            <Icon as={FaFacebook} boxSize={6} />
          </a>
          <a href="https://www.twitter.com/">
            <Icon as={FaTwitter} boxSize={6} />
          </a>
          <a href="https://www.instagram.com/">
            <Icon as={FaInstagram} boxSize={6} />
          </a>
        </HStack>
        </Center>
        <Button
          background={'#c5904A'}
          size="md"
          onClick={handleWhatsAppClick}
          mt={4}
          color={'white'}
          _hover={{
            bg: 'green',
          }}
        >
          Entre em contato via WhatsApp
        </Button>
      </Box>
    </Center>
  );
};

export default ContactProps;
