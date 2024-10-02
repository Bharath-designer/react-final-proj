import React from 'react'
import NavBar from '../components/NavBar'
import styles from '../styles/Home/Home.module.scss'
import HomePageLanding from '../components/Home/HomePageLanding'


const Home = () => {
	return (
		<div className={styles.home_container}>
			<NavBar />
			<HomePageLanding />
		</div>
	)
}

export default Home
