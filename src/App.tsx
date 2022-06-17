import { Contact } from './components/Contact/Contact'
import { ContainerCards } from './components/ContainerCards/ContainerCards'
import { Heading } from './components/Heading/Heading'
import { Header } from './components/Navbar/Header'
import { Presentation } from './components/Presentation/Presentation'
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
      {/* <Server /> */}
    </>
  )
}

export default App
