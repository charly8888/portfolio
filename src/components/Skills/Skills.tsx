import css from './skills.module.scss'
import { useState } from 'react'
import { dataSkills } from './data'
export const Skills = () => {
  const [skill, setSkill] = useState(dataSkills[0])

  const { description } = skill

  return (
    <section className={css.containerSkills}>
      <nav className={css.selectors}>
        <button
          onClick={() => setSkill(dataSkills[0])}
          className={`${skill === dataSkills[0] ? css.buttonActive : false} ${
            css.button
          }`}
        >
          Frontend
        </button>
        <button
          onClick={() => setSkill(dataSkills[1])}
          className={`${skill === dataSkills[1] ? css.buttonActive : false} ${
            css.button
          }`}
        >
          Backend
        </button>
        <button
          onClick={() => setSkill(dataSkills[2])}
          className={`${skill === dataSkills[2] ? css.buttonActive : false} ${
            css.button
          }`}
        >
          Methodologies
        </button>
      </nav>
      <main className={css.content}>
        <p>{description}</p>
      </main>
    </section>
  )
}
