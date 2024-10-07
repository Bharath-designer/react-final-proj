import React, { useMemo } from 'react'
import NavBar from '../components/Common/NavBar'
import styles from '../styles/Home/Home.module.scss'
import HomePageLanding from '../components/Home/HomePageLanding'
import { home_info_card_content, home_page_main_content } from '../content/HomePageContent'
import MainContent from '../components/Home/MainContent'
import BlogsContainer from '../components/Home/BlogsContainer'
import VideoBanner from '../components/Home/VideoBanner'
import Featured from '../components/Home/Featured'
import InfoCard from '../components/Common/InfoCard'
import Footer from '../components/Common/Footer'


const Home = () => {

	return (
		<div className={styles.home_container}>
			<NavBar />
			<HomePageLanding />
			{home_page_main_content.map((content, index)=>{
				return (
					<MainContent last={index === (home_page_main_content.length-1)} key={index} content={content}/>
				)
			})}
			<BlogsContainer />
			<VideoBanner/>
			<Featured/>
			<InfoCard content={home_info_card_content}/>
			<Footer/>
		</div>
	)
}

export default Home
