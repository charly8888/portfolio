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
        <h1>&#60; {heading} &#47;&#62;</h1>
      </div>
    </div>
  )
}
