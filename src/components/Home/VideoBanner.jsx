import styles from "../../styles/Home/VideoBanner.module.scss"

import play from "../../assets/images/play.svg"

const VideoBanner = () => {
    return (
        <div className={styles.video_banner_container}>
            <div className={styles.title}>
                Take a closer look
            </div>
            <div className={styles.desc}>
            Experience what it's like to travel with the TripIt app.
            </div>
            <div className={styles.play_icon}>
                <img src={play} alt="" />
            </div>

        </div>
    )
}

export default VideoBanner
