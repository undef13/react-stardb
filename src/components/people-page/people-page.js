import React, { Component } from "react";

import SwapiService from "../../services/swapi-serviсe";
import ErrorBoundry from "../error-boundry/error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import ListDetails from "../list-details/list-details";
import Row from "../row/row";

export default class PeoplePage extends Component {
  swapi = new SwapiService();

  state = {
    personId: null
  };

  onItemSelect = (personId) => {
		console.log();
    this.setState({ personId });
  };

  render() {
    if (this.state.isError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        renderItems={({ name, birthYear }) =>
          `${name} | ${birthYear}`
        }
        getData={this.swapi.getAllPeople}
        onItemSelect={this.onItemSelect}
      />
    );
    const personDetails = <ListDetails personId={this.state.personId} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
