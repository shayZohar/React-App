import React, { Component, StyleSheet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Footer extends Component {
	render() {
		return (
			<nav style={styles.nav}>
				<div className="nav-wrapper">
					<Button href={'https://www.linkedin.com/in/shay-zohar-b48461180/'} className="right brand-logo">
						LinkedIn Link
						<LinkedInIcon ></LinkedInIcon>
					</Button>
					<Button  style={styles.Button}>Hello World</Button>
				</div>
			</nav>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	nav: { backgroundColor: 'green' },
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	Button: {
		alignItems: 'center',
	}
};
export default Footer;
