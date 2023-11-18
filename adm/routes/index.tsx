import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../src/pages/404Error";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import ProductPage from "../src/pages/Products";

import CategoryPage from "../src/pages/ProductList";
import EditCategory from "../src/pages/EditCategory";
import EditProductPage from "../src/pages/EditProduct";


const router = createBrowserRouter([
    {path: '/home', element: <Home/>, errorElement: <NotFoundPage />},
    {path: '/', element: <Login/>, errorElement: <NotFoundPage />},
    {path: '/produtos', element: <ProductPage/>},
    {path: '/listarprodutos', element: <CategoryPage/>},
    {path: '/categorias', element: <EditCategory/>},
    {path: '/editarprodutos/:id', element: <EditProductPage/>},
    {path: '/error', element: <NotFoundPage/>, errorElement: <NotFoundPage/>}

  ])
  
export default router