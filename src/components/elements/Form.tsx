import css from './form.module.scss'

// type F_a = string
// const German:F_a = 4

export const Form = () => {
  return (
    <form action="" className={css.formContainer} data-netlify="true">
      <label>
        <p>Name</p>
        <input type="text" />
      </label>
      <label>
        <p>Email</p>
        <input type="email" />
      </label>
      <label>
        <p>Message</p>
        <textarea name="bio"></textarea>
      </label>
      <button type='submit'>Send</button>
    </form>
  )
}
