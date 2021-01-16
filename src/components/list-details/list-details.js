import React, { Component } from "react";
import SwapiService from "../../services/swapi-serviсe";
import Spinner from "../spinner/spinner";

import "./list-details.css";

export default class ListDetails extends Component {
  swapi = new SwapiService();

  state = {
		item: null,
		isLoading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
			this.setState({ isLoading: true })
      this.updatePerson();
    }
  }

  updatePerson() {
    const { itemId } = this.props;
		if (!itemId) {
			return;
		};
		this.swapi.getPersonById(itemId).then(this.onPersonLoaded);
	}

	onPersonLoaded = (item) => {
		return this.setState({ item, isLoading: false });
	}
	
  render() {
		const { item, isLoading } = this.state;
		if (!item) {
			return <span>Select from the list</span>
		}

		if(isLoading) {
			return (
				<Spinner />
			)
		}
		
    return (
			<div className="list-details">
				<h3>{item.name}</h3>
      <div className="d-flex">
        <div className="person-image-container">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
            alt="Person"
          ></img>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-item">
              <span>Birth year: </span>
              <span>{item.birthYear}</span>
            </li>
            <li className="list-item">
              <span>Gender: </span>
              <span>{item.gender}</span>
            </li>
            <li className="list-item">
              <span>Height: </span>
              <span>{item.height}</span>
            </li>
          </ul>
        </div>
      </div>
			</div>
		);
  }
}