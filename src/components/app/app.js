import React, { Component } from "react";

import SwapiService from "../../services/swapi-serviсe";
import ErrorIndicator from "../error-indicator/error-indicator";
import Header from "../header/header";
import ListDetails from "../list-details/list-details";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet/random-planet";
import Row from "../row/row";

import "./app.css";

export default class App extends Component {

	swapi = new SwapiService();

	state = {
		isError: false
	}

	componentDidCatch() {
		this.setState({ isError: true });
	}

	render () {
		if(this.state.isError) {
			return (<ErrorIndicator />)
		}

		const personDetails = (<ListDetails itemId={3} />)
		const starshipDetails = (<ListDetails itemId={3} />)

		return (
			<div>
				<Header />
				<RandomPlanet />
				<div className="container">
					<PeoplePage />
					<Row left={personDetails} rigth={starshipDetails} />
				</div>
			</div>
		);
	}
};