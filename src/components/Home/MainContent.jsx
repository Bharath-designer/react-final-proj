
import styles from "../../styles/Home/MainContent.module.scss"


const MainContent = ({content}) => {
    console.log(content);
    
  return (
    <div className={styles.main_content_wrapper}>
        <div className={styles.img_container}>
            <img src={content.img} alt="" />
        </div>
        <div className={styles.content_container}>
            <div className={styles.heading}>{content.title}</div>
            <div className={styles.desc}>{content.desc}</div>
            <div className={styles.link}>{content.link.text}</div>
            <div className={styles.quotes}>{content.quotes.content}</div>
            <div className={styles.author}>- {content.quotes.author}</div>
        </div>
    </div>
  )
}

export default MainContent
