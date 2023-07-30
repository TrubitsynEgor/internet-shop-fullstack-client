import { Container, DetailsHeadingProps, MainNavbar } from '../../shared'
import styles from './Header.module.scss'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import UserStore from '../../store/UserStore'

interface HeaderProps extends DetailsHeadingProps {}

export const Header: FC<HeaderProps> = observer(() => {
  return (
    <header className={`${styles.header} bg-dark`}>
      <Container>
        <MainNavbar />
      </Container>
    </header>
  )
})
