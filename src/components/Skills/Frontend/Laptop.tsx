import { useEffect, useState } from 'react'
import { getRandomHexadecimalColor } from '../../../helpers/getRandomColors'
import Play from '../../icons/Play'
import styles from './Laptop.module.scss'
import Loader from './Loader'
const Laptop = () => {
  const [sourceGif, setSourceGif] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    handlerRequest()
  }, [])

  async function handlerRequest() {
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${
          import.meta.env.VITE_API_KEY_GIF
        }&tag=cat&rating=g`
      )
      const { data } = await response.json()
      setSourceGif(data.images.downsized.url)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.containerFront}>
      <div className={styles.backscreen}>
        <div className={styles.webcam}></div>
        <div className={styles.screen}>
          {/* SCREEN */}
          <div
            className={styles.firstRectangle}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div className={styles.firstLines}></div>
          <div className={styles.firstLines}></div>
          <div className={styles.firstLines}></div>

          {/* VIDEO */}
          <div className={styles.video}>
            {loading ? <Loader /> : <img src={sourceGif} />}
            <button className={styles.button} onClick={handlerRequest}>
              <Play />
            </button>
          </div>

          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>

          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>
          <div className={styles.grayLinesFooter}></div>

          <div
            className={styles.multicolorPointsRight}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.multicolorPointsRight}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>

          <div className={styles.grayLinesTopRight}></div>
          <div className={styles.grayLinesTopRight}></div>
          <div className={styles.grayLinesTopRight}></div>
          <div className={styles.grayLinesTopRight}></div>

          <div className={styles.asideGraySection}></div>

          <div className={styles.whiteLinesInsideGraySection}></div>
          <div className={styles.whiteLinesInsideGraySection}></div>
          <div className={styles.whiteLinesInsideGraySection}></div>
          <div className={styles.whiteLinesInsideGraySection}></div>
          <div className={styles.whiteLinesInsideGraySection}></div>
          <div className={styles.whiteLinesInsideGraySection}></div>

          <div
            className={styles.middleRightRectangle}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>
          <div
            className={styles.middleRightRectangle}
            style={{ backgroundColor: `${getRandomHexadecimalColor()}` }}
          ></div>

          <div className={styles.bottomRightLines}></div>
          <div className={styles.bottomRightLines}></div>
          <div className={styles.bottomRightLines}></div>
        </div>
      </div>
      <div className={styles.baseBlack}>
        <div className={styles.graypart}></div>
      </div>
    </div>
  )
}

export default Laptop
