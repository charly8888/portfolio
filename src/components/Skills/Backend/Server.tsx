import { useState } from 'react'
import Disk from './components/Disk'
import ServerSlot from './components/ServerSlot'
import styles from './Server.module.scss'
const Server = () => {
  const [run, setRun] = useState({ first: true, second: true, third: false })

  return (
    <div className={styles.containerBack}>
      <ServerSlot
        run={run.first}
        setRun={() => setRun({ ...run, first: !run.first })}
      >
        <div className={styles.pipeLeftConexion}>
          <div className={styles.containerLeftDisk}>
            <Disk run={run.first} />
          </div>
        </div>
      </ServerSlot>
      <div className={styles.separator}></div>
      <ServerSlot
        run={run.second}
        setRun={() => setRun({ ...run, second: !run.second })}
      />
      <div className={styles.separator}>
        <div className={styles.tube}></div>
      </div>
      <ServerSlot
        run={run.third}
        setRun={() => setRun({ ...run, third: !run.third })}
      >
        <div className={styles.pipeRightConexion}>
          <div className={styles.containerRightDisk}>
            <Disk run={run.third} />
          </div>
        </div>
      </ServerSlot>
      <div className={styles.verticalSeparator}></div>
      <div className={styles.bottomSeparator}></div>
    </div>
  )
}

export default Server
