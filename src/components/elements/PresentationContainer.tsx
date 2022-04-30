import css from './presentationContainer.module.scss'

export const PresentationContainer = () => {
  return (
    <section className={css.container}>
      <main className={css.containerPresentation}>
        
        {/* // ? Rings frontales */}
        <div className={css.front}>
          <div className={css.ring}></div>
          <div className={css.containerImgMe}>
            <img src="/images/person.png" alt="" />
          </div>

          <div className={`${css.ring} ${css.ringFront}`}></div>
        </div>
      </main>
    </section>
  )
}
