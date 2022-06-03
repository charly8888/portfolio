import css from './form.module.scss'

export const Form = () => {
  return (
    <>
      <div className={css.login_box}>
        <form
          className={css.formContainer}
          data-netlify="true"
          name="contact-form"
          method="POST"
        >
          <div className={css.user_box}>
            <input type="text" name="name" required={true} />
            <label>Name</label>
          </div>
          <div className={css.user_box}>
            <input type="text" name="email" required={true} />
            <label>Email</label>
          </div>
          <div className={css.user_box}>
            <textarea name="message" required={true} />
            <label>Message</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </button>
        </form>
      </div>
    </>
  )
}


