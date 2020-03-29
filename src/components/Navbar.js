import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../column-logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link to="/">
					<img src={logo} width="30%" height="auto" alt="store" className="navbar-brand" />{' '}
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Fortress Co.
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto">
					<ButtonContainer>
						<span className="mr-2">
							<i className="material-icons">shopping_cart</i>
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainDark);
	.nav-link {
		color: var(--mainYellow) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;
