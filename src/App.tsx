import { Card } from './components/Card'
import { Header } from './components/Header'
import css from './styles/app.module.scss'
function App() {
  return (
    <>
      <section className={css.containerCards}>
        <Card
          title="Space Tourism"
          siteURL="https://space-tourism-site-charly8888.netlify.app"
          github="https://github.com/charly8888/space-tourism-website"
          siteImage="/images/space-tourism.png"
        />
        <Card
          title="Space Tourism"
          siteURL="https://space-tourism-site-charly8888.netlify.app"
          github="https://github.com/charly8888/space-tourism-website"
          siteImage="/images/space-tourism.png"
        />
        <Card
          title="Space Tourism"
          siteURL="https://space-tourism-site-charly8888.netlify.app"
          github="https://github.com/charly8888/space-tourism-website"
          siteImage="/images/space-tourism.png"
        />
        <Card
          title="Space Tourism"
          siteURL="https://space-tourism-site-charly8888.netlify.app"
          github="https://github.com/charly8888/space-tourism-website"
          siteImage="/images/space-tourism.png"
        />
      </section>
      <Header />
    </>
  )
}

export default App
