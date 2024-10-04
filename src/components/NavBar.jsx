import React, { useCallback, useState } from 'react'

import logo from "../assets/logo-tripit.svg"
import globe from "../assets/icons/globe.svg"
import dropdown from "../assets/icons/dropdown.svg"

import styles from "../styles/NavBar.module.scss"
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'


const NavBar = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const toggleNav = useCallback(()=>{
        setIsMobileNavOpen(prev=>!prev)
    },[])

    return (
        <div className={`${styles.nav_container} ${isMobileNavOpen ? styles.open :''}`}>
            <div className={styles.left}>
                <img src={logo} alt="" />
                <span onClick={toggleNav} className={styles.hamburger}><RxHamburgerMenu /></span>
            </div>
            <div className={styles.right}>
                <div onClick={toggleNav} className={styles.nav_bar_close}>
                    <IoMdClose />
                </div>
                <div className={styles.nav_items_container}>
                    <div className={styles.nav_item}>TripIt</div>
                    <div className={styles.nav_item}>TripIt Pro</div>
                    <div className={styles.nav_item}>How It Works</div>
                    <div className={styles.nav_item}>Pricing</div>
                    <div className={styles.nav_item}>SAP Concur</div>
                    <div className={`${styles.nav_item} ${styles.left_signin}`}>Sign In</div>
                </div>
                <div className={styles.nav_action_cont}>
                    <div className={`${styles.nav_action_item} ${styles.right_signin}`}>Sign In</div>
                    <div className={`${styles.nav_action_item} ${styles.signup}`}>Sign Up—It's Free!</div>
                    <div className={`${styles.nav_action_item} ${styles.lang}`}>
                        <img src={globe} className={styles.globe} alt="" />
                        <span>EN</span>
                        <img src={dropdown} className={styles.dropdown} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
