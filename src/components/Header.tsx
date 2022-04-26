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
        <nav onClick={(e) => e.stopPropagation()}></nav>
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
