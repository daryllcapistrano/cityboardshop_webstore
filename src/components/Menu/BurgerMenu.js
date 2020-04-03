import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Menu/BurgerMenu.css';
import { Link } from 'react-router-dom';

class BurgerMenu extends React.Component {
	showSettings(event) {
		event.preventDefault();
	}

	render() {
		return (
			<Menu>
				<a id="home" className="menu-item" href="/">
					Home
				</a>
				<a id="about" className="menu-item" href="/details">
					About
				</a>
				<a id="cart" className="menu-item" href="/cart">
					Cart
				</a>
				<a onClick={this.showSettings} className="menu-item--small" href="/">
					Settings
				</a>
			</Menu>
		);
	}
}

export default BurgerMenu;
