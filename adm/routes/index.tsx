import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../src/pages/404Error";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import ProductPage from "../src/pages/Products";

import CategoryPage from "../src/pages/Category";


const router = createBrowserRouter([
    {path: '/home', element: <Home/>, errorElement: <NotFoundPage />},
    {path: '/', element: <Login/>, errorElement: <NotFoundPage />},
    {path: '/produtos', element: <ProductPage/>},
    {path: '/categoria', element: <CategoryPage/>},

  ])
  
export default router