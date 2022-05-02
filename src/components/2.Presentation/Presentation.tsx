import css from './presentation.module.scss'
import { DescriptionContainer, PresentationContainer } from './components'
export const Presentation = () => {
  return (
    <div className={css.distribucion100vh}>
      {/* // *** Container de mí */}
      <PresentationContainer />
      <DescriptionContainer />
    </div>
  )
}
