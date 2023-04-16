import App from 'App';
import POS from 'pages/pos-system/POS';
import Menu from 'pages/pos-system/components/Menu/Menu';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <POS />,
        children: [
          {
            path: '/:categoryName',
            element: <Menu />
          }
        ]
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
