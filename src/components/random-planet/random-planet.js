import React, { Component } from "react";

import "./random-planet.css";

import SwapiService from "../../services/swapi-serviсe";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
	swapi = new SwapiService();

	state = { 
		planet: {},
		isLoading: true,
		isError: false
	};

	componentDidMount() {
		this.getPlanet();
		this.interval = setInterval(this.getPlanet, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	onPlanetLoaded = (planet) => {
		return this.setState({planet, isLoading: false});
	};
	
	onError = () => {
		return this.setState({isError: true, isLoading: false});	
	}

	getPlanet = () => {
		const id = Math.floor(Math.random() * 25) + 2;
		return this.swapi.getPlanetById(id).then(this.onPlanetLoaded).catch(this.onError);
	};

  render() {
		const { planet, isLoading, isError } = this.state;

		const spinner = isLoading ? <Spinner /> : null;
		const planetView = !isLoading && !isError ? <PlanetView planet={planet} /> : null;
		const error = isError ? <ErrorIndicator /> : null;

    return (
      <div className="container random-planet">
        <div className="d-flex justify-content-center">
					{spinner}
					{planetView}
					{error}
				</div>
      </div>
    );
  }
}

const PlanetView = (props) => {
	const { id, population, name, diameter, rotationPeriod } = props.planet;
  return (
    <React.Fragment>
      <div className="random-planet-img-container">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Planet"
        ></img>
      </div>
      <div className="random-planet-info">
        <h3>{name}</h3>
        <ul className="random-planet-list">
          <li className="random-planet-list-item">
            <span>Population: </span>
            <span>{population}</span>
          </li>
          <li className="random-planet-list-item">
            <span>Diameter: </span>
            <span>{diameter}</span>
          </li>
          <li className="random-planet-list-item">
            <span>Rotation period: </span>
            <span>{rotationPeriod}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
