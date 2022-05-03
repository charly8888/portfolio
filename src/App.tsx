import { Header } from './components/1.Navbar/Header'
import { Presentation } from './components/2.Presentation/Presentation'
import { Heading } from './components/3.Heading/Heading'
import { ContainerCards } from './components/4.ContainerCards/ContainerCards'
import { Contact } from './components/5.Contact/Contact'
import { Skills } from './components/Skills/Skills'
function App() {
  return (
    <>
      <Presentation />
      <Heading heading="SKILLS" id="skills" />
      <Skills />
      <Heading heading="PROJECTS" id="projects" />
      <ContainerCards />
      <Contact />
      <Header />
    </>
  )
}

export default App
