import { Header } from './components/Navbar/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Heading } from './components/Heading/Heading'
import { ContainerCards } from './components/ContainerCards/ContainerCards'
import { Contact } from './components/Contact/Contact'
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
