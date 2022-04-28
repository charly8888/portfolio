import css from './getintouch.module.scss'

export const GetInTouch = () => {
  return (
    <section className={css.container}>
      <h1>Get in touch</h1>
      <article>
        <a
          href="https://www.linkedin.com/in/german-hornus-438003226/"
          target="_blank"
        >
          <img src="/icons/linkedin.svg" alt="Linkedin" title="Linkedin" />
        </a>
        <a href="https://github.com/charly8888" target="_blank">
          <img src="/icons/github.svg" alt="Github" title="Github" />
        </a>
      </article>
      <a href="https://twitter.com/SPGerman003" target="_blank">
        <img src="/icons/twitter.svg" alt="Twiter" title="Twiter" />
      </a>
    </section>
  )
}
