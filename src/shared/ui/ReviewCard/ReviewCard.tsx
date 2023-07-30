import { FC } from 'react'
import styles from './ReviewCard.module.scss'
import cn from 'classnames'
import { DetailsDivProps } from '../..'

interface ReviewCardProps extends DetailsDivProps {}

export const ReviewCard: FC<ReviewCardProps> = ({ className }) => {
  return <div className={cn(styles.reviewCard, className)}></div>
}
