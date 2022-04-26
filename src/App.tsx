import { Card } from './components/Card'
import { Header } from './components/Header'
import css from './styles/app.module.scss'
function App() {
  return (
    <>
      <section className={css.containerCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      <Header />
    </>
  )
}

export default App
