import { useState } from 'react'
import css from '../components/Navbar/header.module.scss'

const useGetScrollTop = () => {
  const scrollFromTop = document.documentElement.scrollTop
  const totalLargeOfPage = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight
  const endOfPage =
    scrollFromTop > 0 && scrollFromTop + clientHeight >= totalLargeOfPage - 200

  const [infoAboutScroll, setinfoAboutScroll] = useState({
    scrollFromTop,
    totalLargeOfPage,
    clientHeight,
    endOfPage,
  })

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
    setinfoAboutScroll({
      scrollFromTop,
      totalLargeOfPage,
      clientHeight,
      endOfPage,
    })
  }

  return infoAboutScroll
}

export default useGetScrollTop
