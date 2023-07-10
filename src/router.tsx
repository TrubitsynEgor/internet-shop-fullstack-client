import { createBrowserRouter } from 'react-router-dom'
import { Auth, Admin, Cart, DevicePage, Shop, NotFound } from './pages'

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
    path: '*',
    element: <NotFound />,
  },
])
