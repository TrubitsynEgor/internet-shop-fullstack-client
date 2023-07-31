import { observer } from 'mobx-react-lite'
import userStore from '../store/UserStore'
import { Navigate } from 'react-router'
import { Layout } from './Layout'

export const Favorite = observer(() => {
  const { isAuth } = userStore
  if (!isAuth) return <Navigate to="/login" replace={true} />

  return <Layout>Favorite</Layout>
})
