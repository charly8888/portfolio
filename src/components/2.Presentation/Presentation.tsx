import css from '../../styles/presentation.module.scss'
import { DescriptionContainer, PresentationContainer } from '../elements'
export const Presentation = () => {
  return (
    <div className={css.distribucion100vh}>
      {/* // *** Container de mí */}
      <PresentationContainer />
      <DescriptionContainer />
    </div>
  )
}
