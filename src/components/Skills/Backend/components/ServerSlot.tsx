import { FC, useState } from 'react'
import styles from './ServerSlot.module.scss'
interface props {
  On?: boolean
}

const ServerSlot: FC<props> = ({ On }) => {
  const [isOn, setIsOn] = useState(On)

  return (
    <div className={styles.contaier}>
      <div className={styles.powerSection}>
        <div
          className={styles.powerBackLight}
          style={
            isOn
              ? {
                  background: `linear-gradient(to right,rgb(172, 224, 172),rgb(55, 250, 55) 10%,rgb(55, 250, 55) 20%, antiquewhite)`,
                  boxShadow: `0 0 1px 1px rgba(55, 250, 55, 0.164), 0 0 2px 3px rgba(55, 250, 55, 0.055)`,
                }
              : {}
          }
        ></div>
        <div
          className={styles.circle}
          style={
            isOn
              ? {
                  backgroundColor: ` rgb(55, 250, 55)`,
                  boxShadow: `0 0 1px 1px rgba(55, 250, 55, 0.418),0 0 1px 2px rgba(55, 250, 55, 0.288), 0 0 1px 3px rgba(55, 250, 55, 0.096)`,
                }
              : {}
          }
        >
          <button onClick={() => setIsOn(!isOn)}></button>
        </div>
      </div>
      <div className={styles.ledsGrid}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default ServerSlot
