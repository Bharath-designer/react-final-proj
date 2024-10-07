import styles from "../../styles/Home/Featured.module.scss"

import feature_1 from "../../assets/images/thenewyorktimes.svg"
import feature_2 from "../../assets/images/forbes.svg"
import feature_3 from "../../assets/images/cnet.svg"
import feature_4 from "../../assets/images/wallstreetjournal.svg"
import feature_5 from "../../assets/images/mashable.svg"



const Featured = () => {

    const images = [feature_1,feature_2,feature_3,feature_4,feature_5]

    return (
    <div className={styles.wrapper}>
        <div className={styles.title}>As featured on</div>
        <div className={styles.content}>
            {images.map(image=>{
                return <img src={image} key={image} alt="" />
            })}
        </div>
    </div>
  )
}

export default Featured
