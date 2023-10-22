import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box textAlign="center" mt="20" >
      <Heading fontSize="4xl" color="#c5904A">404 - Página não encontrada</Heading>
      <Text mt="4" fontSize="xl" color="#7A5656">
        Parece que você se perdeu na escuridão!
      </Text>
      <Box fontStyle={'initial'} display="flex" justifyContent="center" alignItems="center" mt="8">
        <Image
          src="https://th.bing.com/th/id/R.dc44341bc6098be680949bec20246eca?rik=JnkOOyiNRIxhpQ&pid=ImgRaw&r=0"
          alt="Vela aromática"
          maxW="500px"
        />
      </Box>
      <Link as={RouterLink} to="/" color="#89836D" mt="20" fontSize={'25px'} display="block" fontStyle={'initial'} >
        Voltar para a Página Inicial
      </Link>
    </Box>
  );
};

export default NotFoundPage;
