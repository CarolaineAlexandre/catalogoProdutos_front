import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../src/pages/404Error";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import ProductPage from "../src/pages/Products";
import Orders from "../src/pages/Orders";
import CategoryPage from "../src/pages/ProductList";
import EditProductPage from "../src/pages/EditProduct";
import Category from "../src/pages/Category";
import ListCategory from "../src/pages/ListCategory";
import EditCategory from "../src/pages/EditCategory";

const router = createBrowserRouter([
    {path: '/home', element: <Home/>, errorElement: <NotFoundPage />},
    {path: '/', element: <Login/>, errorElement: <NotFoundPage />},
    {path: '/produtos', element: <ProductPage/>},
    {path: '/listarprodutos', element: <CategoryPage/>},
    {path: '/editarprodutos/:id', element: <EditProductPage/>},
    {path: '/categorias', element: <Category/>},
    {path: '/listarcategorias', element: <ListCategory/>},
    {path: '/editarcategorias/:id', element: <EditCategory />},
    {path: '/pedidos', element: <Orders/>},
    {path: '/error', element: <NotFoundPage/>, errorElement: <NotFoundPage/>}

  ])
  
export default router
