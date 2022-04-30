import { Card } from './components/Card'
import { Header } from './components/Header'
import css from './styles/app.module.scss'
import { Presentation } from './components/Presentation'
import { Heading } from './components/elements'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Presentation />
      <Heading />
      <section className={css.containerCards}>
        <Card
          title="Space Tourism"
          siteURL="https://space-tourism-site-charly8888.netlify.app"
          github="https://github.com/charly8888/space-tourism-website"
          siteImage="/images/space-tourism.png"
          description="A site about planets, astronauts and tecnology"
        />
        <Card
          title="Ecommerce"
          siteURL="https://e-comerce-challenge.netlify.app/"
          github="https://github.com/charly8888/challenge_e-commerce"
          siteImage="/images/ecommerce.png"
          description="E-commerce that provide an user and points for claim products"
        />
        <Card
          title="Robot Color"
          siteURL="https://robot-color.netlify.app/"
          github="https://github.com/charly8888/robot-colors"
          siteImage="/images/robot.png"
          description="This is my first project, I work in animations and interactions with the DOM"
        />
      </section>
      <Contact />
      <Header />
    </>
  )
}

export default App
