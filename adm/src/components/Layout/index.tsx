import { Grid, GridItem } from "@chakra-ui/react";
import NavBarProps from "../NavBar";
import FooterProps from "../Footer";

interface Props{
    children: React.ReactNode
}

export default function LayoutProps(props: Props){
    const {children} = props
    return(
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Grid  
            className="grid" 
            templateColumns='repeat(6, 1fr)' 
            // templateRows='auto'  
            templateRows="auto 1fr auto"
            flex="1" 
            width="100%" 
            // height="100vh" 
            bg={'rgba(249, 249, 249, 1)'} 
            // overflow={'hidden'} 
            // overflowY="auto"
        >
            <GridItem colSpan={6} >
                <NavBarProps/>
            </GridItem>
            <GridItem colSpan={6} overflowY={"auto"} mt={{ base: 0, md: 70 }}>
                {children}
            </GridItem>
            <GridItem colSpan={6} mt={6}>
                <FooterProps/>
            </GridItem>
        </Grid>
    </div>
        )
}
