import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
import LayoutProps from "../../components/Layout"
import ProductForm from "../../components/productForm.tsx";


const theme = extendTheme({
    // Seus estilos personalizados aqui, se necessário
  });
  
  function ProductPage() {
    const handleProductSubmit = (product: Product) => {
      // incluir dados api 
      console.log("Produto submetido:", product);
    }

    return (
        <>
        <LayoutProps>
        <ChakraProvider theme={theme}>
      <CSSReset />
      <ProductForm onSubmit={handleProductSubmit} user="Nome do Usuário" />
    </ChakraProvider>
        </LayoutProps>
        </>
    )
}
export default ProductPage;