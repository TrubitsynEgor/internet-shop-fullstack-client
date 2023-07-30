import styles from './Logo.module.scss'

import cn from 'classnames'
import { FC } from 'react'
import { DetailsLinkProps } from '../..'
import { Link } from 'react-router-dom'

interface LogoProps extends DetailsLinkProps {}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link
      to={'/'}
      aria-label="Ссылка на главную"
      className={cn(styles.logo, className)}
    ></Link>
  )
}
