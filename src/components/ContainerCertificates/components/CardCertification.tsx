import { FC } from 'react'
import styles from './CardCertification.module.scss'
interface props {
  imgSrc: string
  link?: string
}
const CardCertification: FC<props> = ({ imgSrc, link }) => {
  return (
      <a target={'_blank'} href={link} className={styles.cardContainer}>
        <img src={imgSrc} />
      </a>
  )
}

export default CardCertification
