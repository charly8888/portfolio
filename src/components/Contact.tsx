
import css from '../styles/contatc.module.scss'
export const Contact = () => {
  return (
    <footer className={css.footer}>
      <h1>Get in touch</h1>
      <article>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </article>
      <form action="">
        <label>
          <input type="text" />
        </label>
        <label>
          <input type="email" />
        </label>
        <label>
          <input type="text" />
        </label>
        <button>Send</button>
      </form>
    </footer>
  )
}
