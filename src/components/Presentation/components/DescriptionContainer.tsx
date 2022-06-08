import css from './descriptioncontainer.module.scss'

export const DescriptionContainer = () => {
  return (
    <>
      <section className={css.description}>
        <p>
          <span> " </span>
          Hi, I am German Hornus, a Web Developer from Argentina. I love solving problems and creating software, I also love to keep adding new knowledge to my repertoire and improve my profile as a professional. My main focus is full-stack development and this is my personal portfolio . 
          <span> "</span>
        </p>
      </section>
      <section className={css.description768}>
        <p>
          <span> " </span>
          Hi, I am German Hornus, a Web Developer from Argentina. I love solving problems and creating software, I also love to keep adding new knowledge to my repertoire and improve my profile as a professional. My main focus is full-stack development and this is my personal portfolio.
          <span> "</span>
        </p>
      </section>
    </>
  )
}
