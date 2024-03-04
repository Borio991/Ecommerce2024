import App from '@/App';
import Aboutpage from '@/pages/Aboutpage';
import Catalogpage from '@/pages/Catalogpage';
import Contactpage from '@/pages/Contactpage';
import { Homepage } from '@/pages/Homepage';
import NotFound from '@/pages/error-pages/NotFound';
import ServerError from '@/pages/error-pages/ServerError';
import ProductDetails from '@/pages/products/ProductDetails';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Homepage /> },
      { path: 'catalog', element: <Catalogpage /> },
      { path: 'about', element: <Aboutpage /> },
      { path: 'contact', element: <Contactpage /> },
      { path: 'catalog/:id', element: <ProductDetails /> },
      { path: 'server-error', element: <ServerError /> },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate to="/not-found" /> },
    ],
  },
]);
