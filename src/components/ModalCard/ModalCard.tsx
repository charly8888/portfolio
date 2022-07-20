import { Dispatch, FC, SetStateAction } from 'react'
import { projectsData } from '../ContainerCards/data'
import Github from '../icons/Github'
import Link from '../icons/Link'
import styles from './ModalCard.module.scss'

interface props {
  setSelectProject: Dispatch<SetStateAction<null>>
  selectProject: number | null
}
const ModalCard: FC<props> = ({ setSelectProject, selectProject }) => {
  const {
    title,
    siteURL,
    github,
    siteImage,
    description,
    typeOfProject,
    technologies,
  } = projectsData[selectProject || 0]

  const frontBackOrBoth = () => {
    switch (typeOfProject) {
      case 'FS':
        return 'FULLSTACK'

      case 'F':
        return 'FRONTEND'

      case 'B':
        return 'BACKEND'
      default:
        throw new Error('non-existent project type')
    }
  }
  return (
    <div
      className={styles.containerModal}
      onClick={(e) => handleclickCloseButton(e, setSelectProject)}
    >
      <main className={styles.main} onClick={(e) => e.stopPropagation()}>
        <h1>{title}</h1>

        <div className={styles.containerCard}>
          <aside className={styles.topOrLeft}>
            <img src={siteImage} className={styles.img} />
            <ul>
              <li>Type of project : {frontBackOrBoth()}</li>
              <li>
                Tecnologies:<br></br>
                <section className={styles.conatainerIcons}>
                  {technologies.map((tech, i: number) => {
                    return (
                      <img
                        src={`icons/${tech}`}
                        className={styles.technologiesIcons}
                        key={i}
                      />
                    )
                  })}
                </section>
              </li>
            </ul>
          </aside>
          <aside className={styles.bottomOrRight}>
            <ul>
              <li>
                Description: <br></br>
                <p className={styles.description}>{description}</p>
              </li>
            </ul>
            <footer className={styles.containerFooter}>
              <a href={github} target="_blank" title="View code">
                <Github className={styles.iconSvg} />
              </a>
              <a href={siteURL} target="_blank" title="Open site">
                <Link className={styles.iconSvg} />
              </a>
            </footer>
          </aside>
          <button
            onClick={(e) => handleclickCloseButton(e, setSelectProject)}
            className={styles.buttonClose}
          >
            <svg height="48" width="48" fill="#fff">
              <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}
function handleclickCloseButton(e: any, setSelectProject: Function) {
  e.stopPropagation()
  setSelectProject(null)
  document.body.style.overflow = 'scroll'
}
export default ModalCard
