import css from '../styles/header.module.scss'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className={`${css.header} ${isOpen ? css.headerOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <nav onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${css.ImgMenu} ${isOpen ? css.menuBotonOpen : ''}`}
      >
        <img src="favicon.png" />
      </button>
    </>
  )
}
