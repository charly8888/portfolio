import { Header } from './components/1.Navbar/Header'
import { Presentation } from './components/2.Presentation/Presentation'
import { Heading } from './components/3.Heading/Heading'
import { ContainerCards } from './components/4.ContainerCards/ContainerCards'
import { Contact } from './components/5.Contact/Contact'

function App() {
  return (
    <>
      <Presentation />
      <Heading heading='SKILLS'/>
      <Heading heading='PROJECTS '/>
      <ContainerCards />
      <Contact />
      <Header />
    </>
  )
}

export default App
