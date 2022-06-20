import { Contact } from './components/Contact/Contact'
import { ContainerCards } from './components/ContainerCards/ContainerCards'
import { Heading } from './components/Heading/Heading'
import { Header } from './components/Navbar/Header'
import { Presentation } from './components/Presentation/Presentation'
import Laptop from './components/Skills/Frontend/Laptop'
import { Skills } from './components/Skills/Skills'
import Server from './components/Skills/Backend/Server';
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
      {/* <Laptop/> */}
    </>
  )
}

export default App
