import React, { Component, StyleSheet } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
	render() {
		return (
			<nav style={styles.nav}>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
						LinkedIn Link
					</Link>
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
};
export default Footer;
