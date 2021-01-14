import React from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";

import "./app.css";

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<ItemList />
					</div>
					<div className="col-lg-6">
						<PersonDetails />
					</div>
				</div>
			</div>
    </div>
  );
};

export default App;
