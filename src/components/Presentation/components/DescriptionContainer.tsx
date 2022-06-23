import css from './descriptioncontainer.module.scss'

export const DescriptionContainer = () => {
  return (
    <>
      <h1 className={css.title}>{`<Web Developer/>`}</h1>
      <p className={`${css.w} ${css.lineText}`}>
        <span> " </span> Hi, I am German Hornus, a Software Programmer from Argentina.
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
