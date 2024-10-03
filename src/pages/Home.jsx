import React, { useMemo } from 'react'
import NavBar from '../components/NavBar'
import styles from '../styles/Home/Home.module.scss'
import HomePageLanding from '../components/Home/HomePageLanding'
import { home_page_main_content } from '../content/HomePageContent'
import MainContent from '../components/Home/MainContent'



const Home = () => {

	return (
		<div className={styles.home_container}>
			<NavBar />
			<HomePageLanding />
			{home_page_main_content.map((content, index)=>{
				return (
					<MainContent content={content}/>
				)
			})}
		</div>
	)
}

export default Home
