import css from './form.module.scss'

export const Form = () => {
  return (
    <form action="" className={css.formContainer}>
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
        <textarea
          name="bio"
        ></textarea>
      </label>
      <button>Send</button>
    </form>
  )
}
