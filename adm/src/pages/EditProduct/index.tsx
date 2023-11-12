import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
import LayoutProps from "../../components/Layout"
import EditProductForm from "../../components/editProductForm/index.tsx";


const theme = extendTheme({
    // Seus estilos personalizados aqui, se necessário
  });
  
  function ProductPage() {

    return (
        <>
        <LayoutProps>
          <ChakraProvider theme={theme}>
            <CSSReset />
            <EditProductForm product={1}/>
          </ChakraProvider>
        </LayoutProps>
        </>
    )
}
export default ProductPage;