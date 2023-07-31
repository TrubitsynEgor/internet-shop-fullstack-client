import { createBrowserRouter } from 'react-router-dom'
import {
  Auth,
  Admin,
  Cart,
  DevicePage,
  Shop,
  NotFound,
  Favorite,
} from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
  },
  {
    path: 'login',
    element: <Auth />,
  },
  {
    path: 'registration',
    element: <Auth />,
  },
  {
    path: 'device/:id',
    element: <DevicePage />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
  {
    path: 'favorite',
    element: <Favorite />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
