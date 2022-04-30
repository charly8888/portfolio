import css from './form.module.scss'

// type F_a = string
// const German:F_a = 4

export const Form = () => {
  return (
    <form
      className={css.formContainer}
      data-netlify="true"
      name="contact-form"
      method="POST"
    >
      <input type="hidden" name="form-name" value="contact-form" />

      <fieldset>
        <legend>NAME</legend>
        <input type="text" name="name" />
      </fieldset>

      <fieldset>
        <legend> EMAIL </legend>
        <input type="email" name="email" />
      </fieldset>

      <fieldset>
        <legend> MESSAGE </legend>
        <textarea name="message"></textarea>
      </fieldset>

      <button type="submit">Send</button>
    </form>
  )
}
