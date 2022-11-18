import { useEffect, useState } from 'react'
import css from './descriptioncontainer.module.scss'

export const DescriptionContainer = () => {
  const [openTitle, setOpenTitle] = useState(false)
  const [animationSlash, setAnimationSlash] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenTitle(true)
    }, 3000)
    const timerSlash = setTimeout(() => {
      setAnimationSlash(true)
    }, 4500)
    return () => {
      clearTimeout(timer)
      clearTimeout(timerSlash)
    }
  }, [])

  return (
    <>
      <h1 className={css.titleMobile}>Web Developer</h1>
      <div className={css.title}>
        <span className={`${css.genericV} ${css.firstV}`}></span>
        <div
          className={`${openTitle ? css.openTitle : css.closeTitle} ${
            css.containerTitle
          }`}
        >
          <h1>Web Developer</h1>
        </div>
        <div
          className={` ${animationSlash && css.animationSlash} ${css.slash}`}
        ></div>
        <span className={`${css.genericV} ${css.secondV}`}></span>
      </div>
      <p className={`${css.w} ${css.lineText}`}>
        <span> " </span> Hello, my name is German Hornus.
      </p>
      <p className={`${css.e} ${css.lineText}`}>
        I am a web developer from Argentina
      </p>
      <p className={`${css.r} ${css.lineText}`}>
        who loves to solve problems by creating software,
      </p>
      <p className={`${css.t} ${css.lineText}`}>
        as well as incorporating new knowledge.
      </p>
      <p className={`${css.y} ${css.lineText}`}>
        {' '}
        My goal is to reach to be a full-stack developer.
      </p>
      <p className={`${css.u} ${css.lineText}`}>
        Welcome to my portfolio, I hope you enjoy it!.<span> "</span>
      </p>
    </>
  )
}
