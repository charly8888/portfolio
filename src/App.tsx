import { useState } from 'react'
import { Contact } from './components/Contact/Contact'
import { ContainerCards } from './components/ContainerCards/ContainerCards'
import { Heading } from './components/Heading/Heading'
import ModalCard from './components/ModalCard/ModalCard'
import { Header } from './components/Navbar/Header'
import { Presentation } from './components/Presentation/Presentation'
import { Skills } from './components/Skills/Skills'
function App() {
  const [selectProject, setSelectProject] = useState(null)

 
  return (
    <>
      <Presentation />
      <Heading heading="SKILLS" id="skills" />
      <Skills />
      <Heading heading="PROJECTS" id="projects" />
      <ContainerCards setSelectProject={setSelectProject} />
      <Contact />
      {selectProject !== null && (
        <ModalCard
          setSelectProject={setSelectProject}
          selectProject={selectProject}
        />
      )}
      <Header setSelectProject={setSelectProject} />
      {/* <Server /> */}
      {/* <Laptop/> */}
    </>
  )
}

export default App
