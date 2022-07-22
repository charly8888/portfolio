import useGetScrollTop from '../../hooks/useGetScrollTop'
import Chat from '../icons/Chat'
import Github from '../icons/Github'
import Linkedin from '../icons/Linkedin'
import Twitter from '../icons/Twitter'
import styles from './SocialWidget.module.scss'

const SocialWidget = () => {
  // const [top, setTop] = useState(true)

  // document.body!.onscroll = function () {
  //   console.log('scrolling')
  //   setTop(window.screenTop)
  // }
  // console.log(top)
  const { endOfPage } = useGetScrollTop()
  console.log('scroll', scroll)

  return (
    <>
      <div className={`${styles.container} ${endOfPage && styles.opacity}`}>
        <a
          href="https://www.linkedin.com/in/german-hornus-438003226/"
          target="_blank"
          title="Linkedin"
        >
          <Linkedin className={styles.iconSvg} />
        </a>
        <a href="https://github.com/charly8888" target="_blank" title="Github">
          <Github className={styles.iconSvg} />
        </a>
        <a
          href="https://twitter.com/SPGerman003"
          target="_blank"
          title="Twiter"
        >
          <Twitter className={styles.iconSvg} />
        </a>
        <a href="/#contact" title="Get in touch">
          <Chat className={styles.iconSvg} />
        </a>
      </div>
    </>
  )
}

export default SocialWidget
