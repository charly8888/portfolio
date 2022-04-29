import css from '../styles/header.module.scss'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById('header')?.classList.add(`${css.onScroll}`)
      document.getElementById('logo')?.classList.add(`${css.onScrollLogo}`)
      document.getElementById('logo')?.classList.remove(`${css.onScrollLogoFin}`)
    } else {
      document.getElementById('header')?.classList.remove(`${css.onScroll}`)
      document.getElementById('logo')?.classList.remove(`${css.onScrollLogo}`)
      document.getElementById('logo')?.classList.add(`${css.onScrollLogoFin}`)
    }
  }

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
              <a href="#contact">Contact</a>
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
      <header className={`${css.header768} `} id="header">
        <div className={css.containerIcoAndLogo}>
          <img src="/favicon.png" id="logo"/>
          <section>
            <h1>German.dev</h1>
          </section>
        </div>
        <nav onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
