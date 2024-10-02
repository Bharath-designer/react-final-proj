import React from 'react'

import logo from "../assets/logo-tripit.svg"
import globe from "../assets/icons/globe.svg"
import dropdown from "../assets/icons/dropdown.svg"

import styles from  "../styles/NavBar.module.scss"


const NavBar = () => {
  return (
    <div className={styles.nav_container}>
        <div className={styles.left}>
            <img src={logo} alt="" />
        </div>
        <div className={styles.right}>
            <div className={styles.nav_items_container}>
                <div className={styles.nav_item}>TripIt</div>
                <div className={styles.nav_item}>TripIt Pro</div>
                <div className={styles.nav_item}>How It Works</div>
                <div className={styles.nav_item}>Pricing</div>
                <div className={styles.nav_item}>SAP Concur</div>
                <div className={styles.nav_item}>Sign In</div>
            </div>
            <div className={styles.nav_action_cont}>
                <div className={styles.nav_action_item}>Sign Up—It's Free!</div>
                <div className={styles.nav_action_item}>
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
