import css from './presentationContainer.module.scss'

export const PresentationContainer = () => {
  return (
    <main className={css.container}>
      <div className={css.front}>
        <img src="/images/person.png" alt="" />
      </div>
      <div className={`${css.ring} ${css.ringFront}`}></div>
    </main>
  )
}
