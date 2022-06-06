import { useState } from 'react'
import css from './header.module.scss'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
      document.getElementById('header')?.classList.add(`${css.onScroll}`)
      document.getElementById('logo')?.classList.add(`${css.onScrollLogo}`)
      document
        .getElementById('logo')
        ?.classList.remove(`${css.onScrollLogoFin}`)
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
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/CV-German-Hornus.pdf" target="_blank">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <button onClick={() => setIsOpen(!isOpen)} className={css.ImgMenu}>
        {isOpen ? (
          <svg height="48" width="48" fill="#fff">
            <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
          </svg>
        ) : (
          <svg height="48" width="48" fill="#fff">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        )}
      </button>

      {/* mayor a 768px */}
      <header className={`${css.header768} `} id="header">
        <div className={css.containerIcoAndLogo}>
          <a href="#">
            <img src="/favicon.png" id="logo" />
          </a>
          <section>
            <h1>German.dev</h1>
          </section>
        </div>
        <nav className={css.nav}>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="/CV-German-Hornus.pdf" target="_blank">
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
