import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Auth, Admin, Cart, DevicePage, Shop } from './pages'
const isAuth = false
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Shop />} />
      <Route path="/registration" element={<Auth />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/device/:id" element={<DevicePage />} />

      {isAuth && (
        <>
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </>
      )}
    </>
  )
)
