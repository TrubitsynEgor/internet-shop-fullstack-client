import { DetailsHeadingProps } from '../../shared'
import styles from './Header.module.scss'
import { FC } from 'react'

interface HeaderProps extends DetailsHeadingProps {}

export const Header: FC<HeaderProps> = () => {
  return <header className={styles.header}></header>
}
