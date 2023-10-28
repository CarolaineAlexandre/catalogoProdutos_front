import LayoutProps from "../../components/Layout";
import Products from "../../components/Products_HOME";
import Promotions from "../../components/Promotions";
import Category from "../../components/Category";
import { Center, Flex } from "@chakra-ui/react";

export default function Home(){
    return (
        <>
        <LayoutProps>
            <Center>
            <Flex m={'10px'}>
            <Products />
             {/* <Promotions /> */}
            <Category />
            </Flex>
            </Center>
        </LayoutProps>
        </>
    )
    }
