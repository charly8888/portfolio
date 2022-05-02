import { FC } from 'react'
import css from './heading.module.scss'

interface props {
  heading: string
}
export const Heading: FC<props> = ({ heading }) => {
  return (
    <div>
      <div id="projects" className={css.containerHeading}>
         <h1>&#60; {heading} &#47;&#62;</h1>
      </div>
    </div>
  )
}
