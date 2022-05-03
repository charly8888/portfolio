import css from './skills.module.scss'
import { FC, useState } from 'react'
import { dataSkills } from './data'

export const Skills: FC = () => {
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
        {/* <button
          onClick={() => setSkill(dataSkills[2])}
          className={`${skill === dataSkills[2] ? css.buttonActive : false} ${
            css.button
          }`}
        >
          Methodologies
        </button> */}
      </nav>
      <div className={css.content}>
        <p>{description}</p>
        <div className={css.containerImg}>
          {skill.img.map((url) => (
            <img src={url} className={css.imgIcon} />
          ))}
        </div>
      </div>
    </section>
  )
}
