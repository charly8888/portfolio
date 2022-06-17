import { FC } from 'react'
import { dataSkills } from './data'
import Laptop from './Frontend/Laptop'
import css from './skills.module.scss'

export const Skills: FC = () => {
  // const [skill, setSkill] = useState(dataSkills[0])

  const [frontEnd, Backend] = dataSkills

  return (
    <>
      <div className={css.content}>
        <div className={css.containerLaptop}>
          <Laptop />
        </div>
        <div className={css.informationSkills}>
          <h2>Frontend</h2>
          <p>{frontEnd.description}</p>
          <div className={css.containerImg}>
            {frontEnd.img.map((url) => (
              <a href={url[1]} target="_blank" rel="noreferrer" key={url[2]}>
                <img
                  src={url[0]}
                  className={css.imgIcon}
                  title={url[2]}
                  alt={url[2]}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={`${css.content} ${css.contentBackend}`}>
        <div className={css.informationSkills}>
          <h2>Backend</h2>
          <p>{Backend.description}</p>
          <div className={css.containerImg}>
            {Backend.img.map((url) => (
              <a href={url[1]} target="_blank" rel="noreferrer" key={url[2]}>
                <img
                  src={url[0]}
                  className={css.imgIcon}
                  title={url[2]}
                  alt={url[2]}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={css.containerLaptop}>
          <Laptop />
        </div>
      </div>
    </>
  )
}
