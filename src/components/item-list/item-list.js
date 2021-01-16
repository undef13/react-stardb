import React, { Component } from "react";
import SwapiService from "../../services/swapi-serviсe";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";

import "./item-list.css"

export default class ItemList extends Component {

	swapi = new SwapiService();

	state = {
		list: null,
		isLoading: true,
		isError: false
	}

	onListLoaded = (list) => {
		return this.setState({ list, isLoading: false })
	}

	onError = () => {
		return this.setState({ isError: true, isLoading: false })
	}
	
	componentDidMount() {
		const { getData } = this.props;
		getData().then(this.onListLoaded).catch(this.onError);
	}

	renderList = (list) => {
		const { onItemSelect, renderItems } = this.props;
		return list.map(item => {
			const { id } = item;
			return (
				<li key={id} onClick={() => onItemSelect(id)} className="list-group-item">
					<span>{renderItems(item)}</span>
				</li>
			)
		})
	}

	render () {
		const { list, isLoading, isError } = this.state;
		if(!list) {
			return <Spinner />
		}

		const itemsList = this.renderList(list)
		const spinner = isLoading ? <Spinner /> : null;
		const listView = !isLoading && !isError ? <ListView itemsList={itemsList} /> : null;
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
	const { itemsList } = props;
	return (
		<ul className="list-group">
			{itemsList}
		</ul>
	)
}