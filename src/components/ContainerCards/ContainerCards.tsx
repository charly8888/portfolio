import css from './app.module.scss'
import { Card } from './components/Card'
import { projectsData } from './data'

export const ContainerCards = () => {
  return (
    <section className={css.containerCards}>
      {projectsData.map((project) => {
        return <Card {...project} key={project.title} />
      })}
    </section>
  )
}
