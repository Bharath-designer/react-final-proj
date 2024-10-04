import styles from '../styles/InfoCard.module.scss'

const InfoCard = ({content}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>{content.title}</div>
        <div className={styles.desc}>{content.desc}</div>
        <div className={styles.btn}>{content.btnText}</div>
    </div>
  )
}

export default InfoCard
