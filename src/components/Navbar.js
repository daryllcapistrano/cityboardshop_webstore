import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../column-logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Header extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				{/* <Link to="/">
					<img src={logo} width="30%" height="auto" alt="store" className="navbar-brand" />{' '}
				</Link> */}
				<span className="navbar-nav align-items-center mx-auto">
					<h1 className="nav-item display-2">
						<Link to="/" className="nav-link">
							fortress co.
						</Link>
					</h1>
				</span>
				<Link to="/cart" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="material-icons">storefront</i>
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainWhite);
	.nav-link {
		color: var(--mainDark) !important;
		text-transform: capitalize;
	}
`;
