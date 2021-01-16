export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";

  getResourse = async (url) => {
    const response = await fetch(`${this._baseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON;
  }

  getAllPeople = async () => {
		const response = await this.getResourse(`/people`);
    return response.results.map(this._transformPerson);
  }

  getPersonById = async (id) => {
    return this.getResourse(`/people/${id}`)
      .then(this._transformPerson)
      .catch((e) => console.log(e));
  }

  getAllPlanets = async () => {
    const response = await this.getResourse(`/planets`);
    return response.results.map(this._transformPlanet);
  }

  getPlanetById = async (id) => {
    return this.getResourse(`/planets/${id}`)
      .then(this._transformPlanet)
      .catch((e) => console.log(e));
  }

  getAllStarships = async () => {
		const response = await this.getResourse(`/starships`);
    return response.results.map(this._transformStarship);
  }

  getStarshipById = async (id) => {
		try {
			const response = await this.getResourse(`/starships/${id}`);
			return this._transformStarship(response);
		} catch (e) {
			console.log(e);
		}
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet.url),
      population: planet.population,
      name: planet.name,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person.url),
			name: person.name,
			birthYear: person.birth_year,
			gender: person.gender,
			height: person.height
    };
	};
	
	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship.url),
			name: starship.name,
			cargoCapacity: starship.cargo_capacity,
			cost: starship.cost_in_credits,
			length: starship.length
		};
	}
}
