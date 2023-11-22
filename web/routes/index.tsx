import { createBrowserRouter } from "react-router-dom";
import Catalog from "../src/pages/Catalog";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import NotFoundPage from "../src/pages/404Error";
import CategoryPage from "../src/pages/CategoryCatalog";
import DetailProduct from "../src/pages/DetailProduct/index";

const router = createBrowserRouter([
    {path: '/', element: <Home/>, errorElement: <NotFoundPage />},
    {path: '/catalog', element: <Catalog/>},
    {path: '/about', element: <About/>},
    {path: '/contact', element: <Contact/>},
    {path: "catalog/category/:category", element: <CategoryPage/>},
    {path: "/product/:productId", element: <DetailProduct/>},
    

  ])
  
export default router