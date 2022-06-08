import { FC } from 'react'
import css from './heading.module.scss'

interface props {
  heading: string
  id: string
}
export const Heading: FC<props> = ({ heading, id }) => {
  return (
    <div>
      <div id={id} className={css.containerHeading}>
        <span className={css.separator}></span>
        <h1>{heading}</h1>
        <span className={css.separator}></span>
      </div>
    </div>
  )
}
