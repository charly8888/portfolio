import css from './contatc.module.scss'
import { Form } from './components/Form'
import { GetInTouch } from './components/GetInTouch'
export const Contact = () => {
  return (
    <footer className={css.containerFooter} id="contact">
      <GetInTouch />
      <Form />
    </footer>
  )
}
