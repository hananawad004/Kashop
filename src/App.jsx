import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from "react-router-dom";
import router from './route.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./i18n/i18n";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
      
          <RouterProvider router={router} />
   
      </QueryClientProvider>
      <ToastContainer /> 
    </>
  );
}

export default App;
