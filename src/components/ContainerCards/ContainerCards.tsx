import { Dispatch, FC, SetStateAction } from 'react'
import css from './app.module.scss'
import { Card } from './components/Card'
import { projectsData } from './data'

type props = {
  setSelectProject: Dispatch<SetStateAction<null>>
}

export const ContainerCards: FC<props> = ({ setSelectProject }) => {
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
