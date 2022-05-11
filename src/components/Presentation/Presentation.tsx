import { DescriptionContainer, PresentationContainer } from './components'
import css from './presentation.module.scss'
export const Presentation = () => {
  return (
    <div className={css.distribucion100vh}>
      {/* // *** Container de mí */}
      <PresentationContainer />
      <DescriptionContainer />
    </div>
  )
}
