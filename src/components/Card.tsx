import css from '../styles/card.module.scss'
import { FC } from 'react'

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
        <a href={github} target="_blank">
          <img src="icons/github.svg" alt="Github" />
        </a>
        <a href={siteURL} target="_blank">
          <img src="/icons/link.svg" />
        </a>
      </footer>
    </div>
  )
}
