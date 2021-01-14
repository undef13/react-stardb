import React, { Component } from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";

import "./app.css";

export default class App extends Component {

	state = {
		personId: 1
	}

	onPersonSelect = (personId) => {
		this.setState({ personId })
	}

	render () {
		return (
			<div>
				<Header />
				<RandomPlanet />
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<ItemList onPersonSelect={this.onPersonSelect} />
						</div>
						<div className="col-lg-6">
							<PersonDetails personId={this.state.personId} />
						</div>
					</div>
				</div>
			</div>
		);
	}
};