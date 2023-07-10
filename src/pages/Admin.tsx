import { observer } from 'mobx-react-lite'
import userStore from '../store/UserStore'
import { Navigate } from 'react-router'

export const Admin = observer(() => {
  const { isAuth, user } = userStore

  if (!isAuth && user?.role !== 'ADMIN')
    return <Navigate to="/" replace={true} />

  return <div>Admin</div>
})
