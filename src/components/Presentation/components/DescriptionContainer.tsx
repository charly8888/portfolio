import { useEffect, useState } from 'react'
import css from './descriptioncontainer.module.scss'

export const DescriptionContainer = () => {
  const [openTitle, setOpenTitle] = useState(false)
  const [animationSlash, setAnimationSlash] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenTitle(true)
    }, 1400)
    const timerSlash = setTimeout(() => {
      setAnimationSlash(true)
    }, 3000)
    return () => {
      clearTimeout(timer)
      clearTimeout(timerSlash)
    }
  }, [])

  return (
    <>
      <div className={css.title}>
        <span className={`${css.genericV} ${css.firstV}`}></span>
        <div className={`${openTitle ? css.openTitle : css.closeTitle} ${css.containerTitle}`}>
          <h1>Web Developer</h1>
        </div>
        <div
          className={` ${animationSlash && css.animationSlash} ${css.slash}`}
        ></div>
        <span className={`${css.genericV} ${css.secondV}`}></span>
      </div>
      <p className={`${css.w} ${css.lineText}`}>
        <span> " </span> Hi, I am German Hornus, a Software Programmer from
        Argentina.
      </p>
      <p className={`${css.e} ${css.lineText}`}>
        I love solving problems and creating software,
      </p>
      <p className={`${css.r} ${css.lineText}`}>
        I also love to keep adding new knowledge to my repertoire
      </p>
      <p className={`${css.t} ${css.lineText}`}>
        and improve my profile as a professional.
      </p>
      <p className={`${css.y} ${css.lineText}`}>
        My main focus is full-stack development and
      </p>
      <p className={`${css.u} ${css.lineText}`}>
        this is my personal portfolio.<span> "</span>
      </p>
    </>
  )
}
