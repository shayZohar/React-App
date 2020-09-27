import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import CustomizedDialogs from '../utils/costumizedDialog';

class Header extends Component {
	helpContent = 'this is the content of main help';
	//check and render if user is logged-in
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">Login with Google</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="3" style={{ margin: '0 10px' }}>
						Credits: {this.props.auth.credits}
					</li>,
					<li key="2">
						<a href="/api/logout">Logout</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav style={{ backgroundColor: 'blue' }}>
				<div className="nav-wrapper">
					<Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
						Surveys By Emails
					</Link>
					<ul className="right">{this.renderContent()}</ul>
					<div style={{ float: 'right' }}>
						<CustomizedDialogs title="main help" content={this.helpContent}></CustomizedDialogs>
					</div>
				</div>
			</nav>
		);
	}
}

// auth is coming from 'index.js' of reducers library
function mapStateToProps({ auth }) {
	return { auth };
}

// connect the reducer
export default connect(mapStateToProps)(Header);
