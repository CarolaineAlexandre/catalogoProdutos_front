
import { ChakraProvider } from "@chakra-ui/react";
import LayoutProps from "../../components/Layout"
import EditProductForm from "../../components/editProductForm/index.tsx";

  function ProductPage() {
    



    return (
        <>
        <LayoutProps>
            <ChakraProvider>
            <EditProductForm/>
            </ChakraProvider>
        </LayoutProps>
        </>
    )
}
export default ProductPage;