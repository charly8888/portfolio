import css from '../styles/logo.module.scss'
export const Logo = () => {
  return (
    <div className={css.container}>
      <div className={`${css.rectangleVertical} ${css.lila} `}></div>
      <div className={css.rectangleVertical}></div>
      <div className={css.rectangle}></div>
      <div className={`${css.rectangle} ${css.lilaBtm}`}></div>
      <div className={css.trans}></div>
    </div>
  )
}
