import LayoutProps from "../../components/Layout";
import Products from "../../components/Products_HOME";
import Category from "../../components/Category";
import { Center, Flex } from "@chakra-ui/react";

export default function Home(){
    return (
        <>
        <LayoutProps>
            <Center>
            <Flex m={'10px'}>
            <Products />
            <Category />
            </Flex>
            </Center>
        </LayoutProps>
        </>
    )
    }
