import { ChakraProvider } from "@chakra-ui/react";
import LayoutProps from "../../components/Layout"
import EditCategoryPage from "../../components/CategoryEdit";

export default function EditCategory() {
    return (
        <>
        <LayoutProps>
            <ChakraProvider>
                <EditCategoryPage/>
            </ChakraProvider>
        </LayoutProps>
        </>
    )
}