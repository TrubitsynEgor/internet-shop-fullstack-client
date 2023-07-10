import { DetailsDivProps } from '../../shared'
import styles from './TemplateName.module.scss'
import cn from 'classnames'
import { FC } from 'react'

interface TemplateNameProps extends DetailsDivProps {}

export const TemplateName: FC<TemplateNameProps> = ({ className }) => {
  return <div className={cn(styles.templateName, className)}></div>
}
