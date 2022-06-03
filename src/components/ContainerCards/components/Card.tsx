import { FC } from 'react'
import Github from '../../icons/Github'
import Link from '../../icons/Link'
import css from './card.module.scss'

interface Props {
  title: string
  siteURL: string
  github: string
  siteImage: string
  description: string
}

export const Card: FC<Props> = ({
  title,
  siteURL,
  github,
  siteImage,
  description,
}) => {
  return (
    <div className={css.card}>
      <div className={css.mark}>
        <h3>{title}</h3>
      </div>

      <section className={css.img}>
        <img src={siteImage} />
      </section>
      <p className={css.text}>{description}</p>

      <footer className={css.footer}>
        <a href={github} target="_blank" title="View code">
          <Github className={css.iconSvg} />
        </a>
        <a href={siteURL} target="_blank" title="Open site">
          <Link className={css.iconSvg} />
        </a>
      </footer>
    </div>
  )
}
