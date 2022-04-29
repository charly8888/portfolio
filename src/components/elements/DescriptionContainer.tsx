import css from './descriptioncontainer.module.scss'

export const DescriptionContainer = () => {
  return (
    <>
      <section className={css.description}>
        <h1>
          German Hornus <span>:</span>
        </h1>
        <h1>
          <span>&lt; </span>Frontend
        </h1>
        <h1>
          Web Developer<span> &gt; =</span>
        </h1>
        <br />
        <p>
          <h1> " </h1>
          Hi, I am Junior Software Developer. I love solving problems and
          creating software, I also love to keep adding new knowledge to my
          repertoire and improve my profile as a professional. My main focus is
          full-stack development.
          <h1> "</h1>
        </p>
      </section>
      <section className={css.description768}>
        <h1>
          German Hornus <span className={css.twoPoints}>:</span> Frontend Web Developer<span> =</span>
        </h1>
        <br />
        <p>
          <h1> " </h1>
          Hi, I am Junior Software Developer. I love solving problems and
          creating software, I also love to keep adding new knowledge to my
          repertoire and improve my profile as a professional. My main focus is
          full-stack development.
          <h1> "</h1>
        </p>
      </section>
    </>
  )
}
