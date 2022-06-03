import Github from '../../icons/Github'
import Linkedin from '../../icons/Linkedin'
import Twitter from '../../icons/Twitter'
import css from './getintouch.module.scss'

export const GetInTouch = () => {
  return (
    <>
      <section className={css.container}>
        <h1>Get in touch</h1>
        <article>
          <a
            href="https://www.linkedin.com/in/german-hornus-438003226/"
            target="_blank"
            title="Linkedin"
          >
            <Linkedin className={css.iconSvg} />
          </a>
          <a
            href="https://github.com/charly8888"
            target="_blank"
            title="Github"
          >
            <Github className={css.iconSvg} />
          </a>
        </article>
        <a
          href="https://twitter.com/SPGerman003"
          target="_blank"
          title="Twiter"
        >
          <Twitter className={css.iconSvg} />
        </a>
      </section>
      <section className={css.container768}>
        <h1>Get in touch</h1>
        <article>
          <a
            href="https://www.linkedin.com/in/german-hornus-438003226/"
            target="_blank"
            title="Linkedin"
          >
            <Linkedin className={css.iconSvg} />
          </a>
          <a
            href="https://github.com/charly8888"
            target="_blank"
            title="Github"
          >
            <Github className={css.iconSvg} />
          </a>
          <a
            href="https://twitter.com/SPGerman003"
            target="_blank"
            title="Twiter"
          >
            <Twitter className={css.iconSvg} />
          </a>
        </article>
      </section>
    </>
  )
}
