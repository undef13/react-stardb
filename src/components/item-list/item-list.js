import React, { Component } from "react";
import SwapiService from "../../services/swapi-serviсe";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

import "./item-list.css"

export default class ItemList extends Component {

	swapi = new SwapiService();

	state = {
		people: null,
		isLoading: true,
		isError: false
	}

	getPeople = () => {
		this.swapi.getAllPeople()
			.then(this.onPeopleLoaded)
			.catch(this.onError)
	}

	onPeopleLoaded = (people) => {
		return this.setState({ people, isLoading: false })
	}

	onError = () => {
		return this.state({ isError: true, isLoading: false })
	}
	
	componentDidMount() {
		this.getPeople();
	}

	renderList = (people) => {
		return people.map(({id, name}) => {
			return (
				<li key={id} onClick={() => this.props.onPersonSelect(id)} className="list-group-item">
					<span>{name}</span>
				</li>
			)
		})
	}

	render () {
		const { people, isLoading, isError } = this.state;

		if(!people) {
			return <Spinner />
		}

		const peopleList = this.renderList(people)
		
		const spinner = isLoading ? <Spinner /> : null;
		const listView = !isLoading && !isError ? <ListView people={peopleList} /> : null;
		const error = isError ? <ErrorIndicator /> : null;

		return (
			<div className="item-list">
				{spinner}
				{listView}
				{error}
			</div>
		);
	}
};

const ListView = (props) => {
	const { people } = props;
	return (
		<ul className="list-group">
			{people}
		</ul>
	)
}