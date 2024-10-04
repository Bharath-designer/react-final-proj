import React from 'react'

import tripit_logo from '../assets/logo-tripit.svg'

import styles from '../styles/Login/Login.module.scss'


const Login = () => {
	return (
		<div className={styles.login_wrapper}>
			<div className="content"></div>
			<div className="footer">
				<div className="footer-item">© 2006-2024, Concur Technologies, Inc.</div>
				<div className="footer-item">User Agreement</div>
				<div className="footer-item">Privacy Statement</div>
				<div className="footer-item">Cookie Preferences</div>
				<div className="footer-item">Do Not Share/Sell My Personal Information</div>
				<div className="footer-item">Help Center</div>
			</div>
		</div>
	)
}

export default Login
