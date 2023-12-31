import { observer } from 'mobx-react-lite'
import userStore from '../store/UserStore'
import { Navigate } from 'react-router'
import { Layout } from './Layout'

export const Auth = observer(() => {
  const { isAuth } = userStore
  if (isAuth) return <Navigate to="/profile" replace={true} />

  return <Layout>Auth</Layout>
})
