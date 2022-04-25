import { Card } from './components/Card'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import css from './styles/app.module.scss'
function App() {
  return (
    <>
      <section className={css.containerCards}>
        <Card />
        <Card />
        <Card />
      </section>
      <Logo />
      <Header />
    </>
  )
}

export default App
