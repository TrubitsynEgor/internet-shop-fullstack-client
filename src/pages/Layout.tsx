import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { DetailsDivProps } from '../shared'
import { Header } from '../widgets'

export const Layout: FC<DetailsDivProps> = observer(({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
})
