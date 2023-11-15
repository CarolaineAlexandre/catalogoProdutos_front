import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import LayoutProps from "../../components/Layout"
import ProductForm from "../../components/createProductForm/index.tsx";

  function ProductPage() {


    return (
        <>
        <LayoutProps>
          <ChakraProvider>
            <CSSReset />
            <ProductForm />
          </ChakraProvider>
        </LayoutProps>
        </>
    )
}
export default ProductPage;