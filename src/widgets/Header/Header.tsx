import { Container, DetailsHeadingProps, MainNavbar } from '../../shared'
import styles from './Header.module.scss'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import UserStore from '../../store/UserStore'

interface HeaderProps extends DetailsHeadingProps {}

export const Header: FC<HeaderProps> = observer(() => {
  const { user } = UserStore
  console.log(user)

  return (
    <header className={`${styles.header} bg-body-tertiary`}>
      <Container>
        <MainNavbar />
      </Container>
    </header>
  )
})
