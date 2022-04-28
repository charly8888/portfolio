import css from './presentationContainer.module.scss'

export const PresentationContainer = () => {
  return (
    <section className={css.container}>
      <main className={css.containerPresentation}>
        <div className={css.containerBack}>
          <div className={`${css.back} ${css.one}`}>
            <div className={css.containerImg}>
              {/* <img src="/icons/react.svg" alt="" /> */}
            </div>
            <div className={css.containerImg}>
              <img src="/icons/js.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/nodejs.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/html.svg" alt="" />
            </div>
          </div>
          <div className={css.back}>
            <div className={css.containerImg}>
              <img src="/icons/css.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/react.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/ts.svg" alt=""  />
            </div>
            <div className={css.containerImg}>
              {/* <img src="/icons/react.svg" alt="" /> */}
            </div>
          </div>
          <div className={css.back}>
            <div className={css.containerImg}>
              <img src="/icons/docker.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/git.png" alt="" />
            </div>
            <div className={css.containerImg}>
              <img src="/icons/mongo.svg" alt="" />
            </div>
            <div className={css.containerImg}>
              {/* <img src="/icons/git.svg" alt="" /> */}
            </div>
          </div>
        </div>
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
