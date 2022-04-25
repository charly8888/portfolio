import css from '../styles/header.module.scss'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen ? (
        <>
          <header className={css.header} onClick={() => setIsOpen(!isOpen)}>
            <nav onClick={(e) => e.stopPropagation()}></nav>
          </header>
          <button onClick={() => setIsOpen(!isOpen)} className={css.ImgMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
            </svg>
          </button>
        </>
      ) : (
        <button onClick={() => setIsOpen(!isOpen)} className={css.ImgMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        </button>
      )}
    </>
  )
}
