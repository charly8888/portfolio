import { useState } from 'react'
import Disk from './components/Disk'
import ServerSlot from './components/ServerSlot'
import styles from './Server.module.scss'
const Server = () => {
  const [run, setRun] = useState({ first: true, second: false, third: false })
  const [error, setError] = useState({
    first: false,
    second: false,
    third: false,
  })
  const [animationError, setAnimationError] = useState(false)

  return (
    <div className={styles.containerBack}>
      <span
        className={`${styles.error404} ${
          animationError ? styles.errorBackPage : styles.errorBackPageInactive
        } ${
          animationError ? styles.errorActive : styles.animationErrorInactive
        }`}
      ></span>
      <div
        className={`${styles.error404} ${
          animationError ? styles.errorActive : styles.animationErrorInactive
        }`}
      >
        <pre className={styles.code}>
          {`{ "status": 500, 
  "error": Internal Server Error }`}
        </pre>
      </div>
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
        // run={run.second}
        error={error.second}
        setRun={() => {
          setAnimationError(!animationError)
          setError({ ...error, second: !error.second })
        }}
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
