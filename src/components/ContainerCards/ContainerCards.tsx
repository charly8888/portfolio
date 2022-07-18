import css from './app.module.scss'
import { Card } from './components/Card'
import { projectsData } from './data'

export const ContainerCards = ({setSelectProject}) => {
  return (
    <section className={css.containerCards}>
      {projectsData.map((project, i) => {
        return (
          <Card
            {...project}
            key={i}
            setSelectProject={setSelectProject}
            i={i}
          />
        )
      })}
    </section>
  )
}
