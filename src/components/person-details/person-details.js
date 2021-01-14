import React, { Component } from "react";
import SwapiService from "../../services/swapi-serviсe";

import "./person-details.css"

export default class PersonDetails extends Component {

	swapi = new SwapiService();

	state = {
		person: null
	}

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if(prevProps.personId !== this.props.personId) {
			this.updatePerson();
		}
	}
	
	updatePerson() {
		const { personId } = this.props;
		if (!personId) {
			return;
		}
		this.swapi.getPersonById(personId).then((person) => {
			this.setState({ person });
		});
	}

	render() {
		const { person } = this.state;
		
		if(!person) {
			return <span>Select item from the list</span>
		}
	
		return (
			<div className="person-details">
				<h3>{person.name}</h3>
				<div className="d-flex">
					<div className="person-image-container">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt="Person"></img>
					</div>
					<div>
						<ul className="person-list">
							<li className="person-list-item">
								<span>Birth year: </span>
								<span>{person.birthYear}</span>
							</li>
							<li className="person-list-item">
								<span>Gender: </span>
								<span>{person.gender}</span>
							</li>
							<li className="person-list-item">
								<span>Height: </span>
								<span>{person.height}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
};
