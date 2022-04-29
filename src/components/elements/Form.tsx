import css from './form.module.scss'

// type F_a = string
// const German:F_a = 4

export const Form = () => {
  return (
    <form className={css.formContainer}  data-netlify="true">
      <label>
        <p>Name</p>
        <input type="text" name="name" />
      </label>
      <label>
        <p>Email</p>
        <input type="email" name="email" />
      </label>
      <label>
        <p>Message</p>
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  )
}
