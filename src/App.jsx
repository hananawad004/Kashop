import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from "react-router-dom";
import router from './route.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </QueryClientProvider>
      <ToastContainer /> 
    </>
  );
}

export default App;
