import React, { Component } from "react";

import "./random-planet.css";
import SwapiService from "../../services/swapi-serviсe";

export default class RandomPlanet extends Component {

	constructor() {
		super();
		this.state = {
			id: null,
			population: null,
			planetName: null,
			diameter: null,
			rotationPeriod: null
		}
		this.swapi = new SwapiService();

		this.getPlanet = async () => {
			const id = Math.floor(Math.random() * 10) + 2;
			console.log(id);
			const planet = await this.swapi.getPlanetById(id);
			this.setState(() => {
				return {
					id,
					population: planet.population,
					planetName: planet.name,
					diameter: planet.diameter,
					rotationPeriod: planet.rotation_period
				}
			})
		}

		this.getPlanet();
	}


	render() {

		const { id, population, planetName, diameter, rotationPeriod } = this.state;

		return (
			<div className="container random-planet">
				<div className="d-flex justify-content-center">
					<div className="random-planet-img-container">
						<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"></img>
					</div>
					<div className="random-planet-info">
						<h3>{planetName}</h3>
						<ul className="random-planet-list">
							<li className="random-planet-list-item">
								<span>Population: </span>
								<span>{ population }</span>
							</li>
							<li className="random-planet-list-item">
								<span>Diameter: </span>
								<span>{ diameter }</span>
							</li>
							<li className="random-planet-list-item">
								<span>Rotation period: </span>
								<span>{ rotationPeriod }</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}