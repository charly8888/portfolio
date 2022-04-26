import css from '../styles/card.module.scss'
import GitHubIcon from '@mui/icons-material/GitHub'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import { blue } from '@mui/material/colors'
import { FC } from 'react'

interface Props {
  title: string
  siteURL: string
  github: string
  siteImage: string
}

export const Card: FC<Props> = ({ title, siteURL, github, siteImage }) => {
  return (
    <div className={css.card}>
      <div className={css.mark}>
        <h3>{title}</h3>
      </div>
      <section className={css.img}>
        <img src={siteImage} />
      </section>
      <footer className={css.footer}>
        <a href={github} target="_blank">
          <GitHubIcon sx={{ color: blue[400], fontSize: 40 }} />
        </a>
        <a href={siteURL} target="_blank">
          <NorthEastRoundedIcon sx={{ color: blue[400], fontSize: 40 }} />
        </a>
      </footer>
    </div>
  )
}
