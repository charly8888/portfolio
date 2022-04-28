import css from '../styles/contatc.module.scss'
import { Form } from './elements/Form'
import { GetInTouch } from './elements/GetInTouch'
export const Contact = () => {
  return (
    <footer className={css.containerFooter} id="contact">
      <GetInTouch />
      <Form />
    </footer>
  )
}
