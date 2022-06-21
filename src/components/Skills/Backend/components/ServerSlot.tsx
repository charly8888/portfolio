import { FC } from 'react'
import styles from './ServerSlot.module.scss'
interface props {
  run?: boolean
  setRun: any
  children?: any
  error?: boolean
}

const ServerSlot: FC<props> = ({ setRun, run, error, children }) => {
  return (
    <div className={styles.contaier}>
      <div className={styles.powerSection}>
        <div
          className={`${styles.powerBackLight} ${
            run && styles.powerBackLightColorGreen
          } ${error && styles.powerBackLightColorRed}`}
        ></div>
        <div
          className={`${styles.circle} ${run && styles.circleGreen} ${
            error && styles.circleRed
          }`}
        >
          <button onClick={setRun}></button>
        </div>
      </div>
      <div className={styles.ledsGrid}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {children}
    </div>
  )
}

export default ServerSlot
