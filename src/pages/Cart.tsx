import { observer } from 'mobx-react-lite'
import userStore from '../store/UserStore'
import { Navigate } from 'react-router'

export const Cart = observer(() => {
  const { isAuth } = userStore
  if (!isAuth) return <Navigate to="/login" replace={true} />

  return <div>Cart</div>
})
