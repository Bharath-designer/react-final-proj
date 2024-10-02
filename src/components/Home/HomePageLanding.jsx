import React from 'react'
import styles from '../../styles/Home/HomePageLanding.module.scss'

const HomePageLanding = () => {
    return (
        <div className={styles.landing_wrapper}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    An easier trip, each time
                </div>
                <div className={styles.desc}>
                    Imagine checking one place for your travel details and getting a heads up as things happen throughout your trip. See why life without TripIt is a distant memory for millions of travelers.
                </div>
                <button className={styles.get_started}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default HomePageLanding
