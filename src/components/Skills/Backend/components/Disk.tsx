import { FC } from 'react'
import styles from './Disk.module.scss'

interface props {
  run: boolean
}

const Disk: FC<props> = ({ run }) => {
  return (
    <div className={styles.containerDisk}>
      <div className={styles.backCircle}>
        <div className={`${styles.disk} ${run && styles.diskAnimation}`}>
          <div className={styles.ray}></div>
          <div className={`${styles.ray} ${styles.secondRay}`}></div>
          <div className={`${styles.ray} ${styles.threeRay}`}></div>
          <div className={`${styles.ray} ${styles.fourRay}`}></div>
        </div>
        <div className={styles.center}></div>
      </div>
      <div className={styles.squareback}></div>
      <div className={styles.squareback2}></div>
      <div className={`${styles.spike}  ${run && styles.spikeOn}`}>
        <div className={styles.centerSpyke}></div>
      </div>
      <div className={styles.points}></div>
      <div className={`${styles.points} ${styles.secondPoint}`}></div>
      <div className={`${styles.points} ${styles.thirdPoint}`}></div>
      <div className={`${styles.points} ${styles.fourdPoint}`}></div>
    </div>
  )
}

export default Disk
