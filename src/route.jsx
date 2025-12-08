import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom/dom";
import MainLayout from "./assets/layout/MainLayout";
import AuthLayout from "./assets/layout/AuthLayout";
import Home from './assets/pages/home/Home.jsx';
import Cart from './assets/pages/Cart/cart.jsx';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ],
    },
]);
export default router;