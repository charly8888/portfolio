import ServerSlot from './components/ServerSlot'
import styles from './Server.module.scss'
const Server = () => {
  return (
    <div className={styles.containerBack}>
      <ServerSlot On={true} />
      <div className={styles.separator}></div>
      <ServerSlot On={true} />
      <div className={styles.separator}>
        <div className={styles.tube}></div>
      </div>
      <ServerSlot On={false} />
      <div className={styles.verticalSeparator}></div>
      <div className={styles.bottomSeparator}></div>
    </div>
  )
}

export default Server
