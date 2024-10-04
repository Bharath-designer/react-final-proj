
import styles from "../styles/Footer.module.scss"

import logo from "../assets/logo-tripit.svg"

import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={`${styles.col} ${styles.img}`}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.col}>
                    <div className={`${styles.col_item} ${styles.heading}`}>Products</div>
                    <div className={styles.col_item}>Download App</div>
                    <div className={styles.col_item}>TripIt</div>
                    <div className={styles.col_item}>TripIt Pro</div>
                    <div className={styles.col_item}>Help Center</div>
                </div>
                <div className={styles.col}>

                    <div className={`${styles.col_item} ${styles.heading}`}>News & Resources</div>
                    <div className={styles.col_item}>Blog</div>
                    <div className={styles.col_item}>Traveler Resource Center</div>
                    <div className={styles.col_item}>Jobs</div>
                    <div className={styles.col_item}>User Agreement</div>
                    <div className={styles.col_item}>Privacy Statement: Updated 12/21/22</div>
                    <div className={styles.col_item}>Security</div>
                    <div className={styles.col_item}>Google Data Policy</div>
                    <div className={styles.col_item}>Do Not Share/Sell My Personal Information</div>
                </div>
                <div className={styles.col}>
                    <div className={`${styles.col_item} ${styles.heading}`}>Partners</div>
                    <div className={styles.col_item}>Supported Booking Sites</div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.social_icons}>
                    <div className={styles.social_icon}>
                        <FaInstagram/>
                    </div>
                    <div className={styles.social_icon}>
                        <FaFacebook/>
                    </div>
                    <div className={styles.social_icon}>
                        <FaXTwitter/>
                    </div>
                    <div className={styles.social_icon}>
                        <FaLinkedinIn/>
                    </div>
                    <div className={styles.social_icon}>
                        <FaYoutube/>
                    </div>
                </div>
                <div className={styles.cookies}>
                    <span>© 2006-2024, Concur Technologies, Inc. All rights reserved. TripIt® and Concur® are registered trademarks of Concur Technologies, Inc. Other trademarks held by their respective owners.</span>
                    <span className={styles.cookies_pref}>Cookie Preferences</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
