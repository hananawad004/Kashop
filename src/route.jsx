// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";
// import MainLayout from "./assets/layout/MainLayout.jsx";
// import AuthLayout from "./assets/layout/AuthLayout.jsx";
// import Home from './assets/pages/home/Home.jsx';
// import Cart from './assets/pages/cart/Cart.jsx';
// import Login from './assets/pages/login/Login.jsx';
// import Register from './assets/pages/register/Register.jsx';
// import SendCode from './assets/pages/sendcode/SendCode.jsx';
// import ResetPassword from "./assets/pages/resetpassword/ResetPassword.jsx";
// import Products from "./assets/pages/products/Products.jsx";
// import ProductDetails from "./assets/pages/product-details/ProductDetails.jsx";
// import protectedRouter from "./protectedRouter.jsx";
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout />,
//         children: [
//             {
//                 path: "home",

//                 element: <Home />
//             },
//             {
//                 path: "cart",
//                 element:
//                     <protectedRouter>
//                         <Cart />
//                     </protectedRouter>

//             },
//             {
//                 path: "products",

//                 element: <Products />


//             },
//             {
//                 path: "product-details/:productId",
//                 element: <ProductDetails />
//             }
//         ],
//     },
//     {
//         path: "/auth",
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: "login",
//                 element: <Login />
//             },
//             {
//                 path: "register",
//                 element: <Register />
//             },
//             {
//                 path: "sendcode",
//                 element: <SendCode />
//             },
//             {
//                 path: "resetpassword",
//                 element: <ResetPassword />
//             }

//         ],
//     },
// ]);
// export default router;
// src/route.jsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout.jsx";
import AuthLayout from "./assets/layout/AuthLayout.jsx";
import Home from './assets/pages/home/Home.jsx';
import Cart from './assets/pages/cart/Cart.jsx';
import Profile from "./assets/pages/profile/profile.jsx";
import ProfileOverview from './assets/pages/profile/ProfileOverview.jsx';
import ChangePassword from './assets/pages/profile/ChangePassword.jsx';
import Login from './assets/pages/login/Login.jsx';
import Register from './assets/pages/register/Register.jsx';
import SendCode from './assets/pages/sendcode/SendCode.jsx';
import ResetPassword from "./assets/pages/resetpassword/ResetPassword.jsx";
import Products from "./assets/pages/products/Products.jsx";
import ProductDetails from "./assets/pages/product-details/ProductDetails.jsx";
import protectedRouter from "./protectedRouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },  
      { path: "home", element: <Home /> },
      
      {
        path: "cart",
        element: <protectedRouter><Cart /></protectedRouter>
      },
      { path: "products", element: <Products /> },
      { path: "product-details/:productId", element: <ProductDetails /> },

      // Profile nested routes
      {
        path: "profile",
        element: <protectedRouter><Profile /></protectedRouter>,
        children: [
          { index: true, element: <ProfileOverview /> },
          { path: "change-password", element: <ChangePassword /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "sendcode", element: <SendCode /> },
      { path: "resetpassword", element: <ResetPassword /> },
    ],
  },
]);

export default router;
