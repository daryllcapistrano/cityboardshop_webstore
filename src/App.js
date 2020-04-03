import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Menu from './components/Menu/BurgerMenu';

class App extends Component {
	render() {
		return (
			<div id="outer-container">
				<Menu />
				<main id="page-wrap">
					<React.Fragment>
						<Navbar />
						<Switch>
							<Route exact path="/" component={ProductList} />
							<Route path="/details" component={Details} />
							<Route path="/cart" component={Cart} />
							<Route component={Default} />
						</Switch>
						<Modal />
					</React.Fragment>
				</main>
			</div>
		);
	}
}

export default App;
