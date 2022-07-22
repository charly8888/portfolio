import { certificationsData } from '../../helpers/data'
import CardCertification from './components/CardCertification'
import styles from './ContainerCertificates.module.scss'
const ContainerCertificates = () => {
  return (
    <section className={styles.containerCertificates}>
      {certificationsData.map((item, index) => {
        return (
          <CardCertification
            imgSrc={item.imageURL}
            key={index}
            link={item.siteComprobationURL}
          />
        )
      })}
    </section>
  )
}

export default ContainerCertificates
