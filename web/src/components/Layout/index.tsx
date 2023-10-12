import { Grid, GridItem } from "@chakra-ui/react";
import NavBarProps from "../NavBar";
import FooterProps from "../Footer";

interface Props{
    children: React.ReactNode
}

export default function LayoutProps(props: Props){
    const {children} = props
    return(
        <>
    <Grid  className="grid" templateColumns='1fr' templateRows='auto auto 64px' height="100vh" bg={'rgba(249, 249, 249, 1)'} overflow={'hidden'}>
    <GridItem colSpan={1} rowSpan={1}>
        <NavBarProps/>
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        {children}
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        <FooterProps/>
    </GridItem>
    </Grid>
    </>
        )
}