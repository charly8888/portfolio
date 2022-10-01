import { useEffect, useState } from 'react'
import { getRandomHexadecimalColor } from '../../../helpers/getRandomColors'
import Play from '../../icons/Play'
import styles from './Laptop.module.scss'
import Loader from './Loader'
const NUMBERS_OF_COLORS_NEEDED = 17
const Laptop = () => {
  const [sourceGif, setSourceGif] = useState('')
  const [loading, setLoading] = useState(true)

  function generateColors(numberOfColors: number) {
    const arrOfColors: string[] = []

    for (let index = 0; index < numberOfColors; index++) {
      arrOfColors.push(getRandomHexadecimalColor())
    }

    return arrOfColors
  }
  const INITIAL_STATE_COLORS = generateColors(NUMBERS_OF_COLORS_NEEDED)

  const [colors, setColors] = useState(INITIAL_STATE_COLORS)

  useEffect(() => {
    handlerRequest()
  }, [])
  useEffect(() => {
    setColors(generateColors(NUMBERS_OF_COLORS_NEEDED))
  }, [sourceGif])
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
            style={{ backgroundColor: `${colors[0]}` }}
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
            style={{ backgroundColor: `${colors[1]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[2]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[3]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[4]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[5]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[6]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[7]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[8]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[9]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[10]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[11]}` }}
          ></div>
          <div
            className={styles.multicolorPoint}
            style={{ backgroundColor: `${colors[12]}` }}
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
            style={{ backgroundColor: `${colors[13]}` }}
          ></div>
          <div
            className={styles.multicolorPointsRight}
            style={{ backgroundColor: `${colors[14]}` }}
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
            style={{ backgroundColor: `${colors[15]}` }}
          ></div>
          <div
            className={styles.middleRightRectangle}
            style={{ backgroundColor: `${colors[16]}` }}
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
