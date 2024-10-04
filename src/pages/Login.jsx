import React from 'react'

import tripit_logo from '../assets/logo-tripit.svg'

import styles from '../styles/Login/Login.module.scss'
import { Checkbox, TextField } from '@mui/material'


const Login = () => {
	return (
		<div className={styles.login_wrapper}>
			<div className={styles.content}>
				<div className={styles.logo}><img src={tripit_logo} alt="" /></div>
				<div className={styles.inp_row}>
					<TextField id="filled-basic" label="Email Address" variant="outlined" />
				</div>
				<div className={styles.inp_row}>
					<TextField id="filled-basic" label="Password" variant="outlined" />
				</div>
				<div className={styles.inp_row}>
					<span className={styles.checkbox_container}>
						<Checkbox />
						Keep me signed in
					</span>
					<span className={styles.forgot_pass}>Forgot password?</span>
				</div>
				<div className={styles.sign_in_btn}>
					Sign In
				</div>
				{/* <div className={styles.social_sign_in}>
					<span className={styles.title}>
						Or sign in with:
					</span>
					<span className={styles.social_icons}>
						<span className={styles.social_icon}></span>
						<span className={styles.social_icon}></span>
					</span>
				</div>
				<div className={styles.create_one}>
					Don't have an account? Create one.
				</div>
				*/}
			</div>
			<div className={styles.footer}>
				<div className={styles.footer_item}>© 2006-2024, Concur Technologies, Inc.</div>
				<div className={styles.footer_item}>User Agreement</div>
				<div className={styles.footer_item}>Privacy Statement</div>
				<div className={styles.footer_item}>Cookie Preferences</div>
				<div className={styles.footer_item}>Do Not Share/Sell My Personal Information</div>
				<div className={styles.footer_item}>Help Center</div>
			</div>
		</div>
	)
}

export default Login
