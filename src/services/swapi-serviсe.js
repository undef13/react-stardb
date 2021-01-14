export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";

  async getResourse(url) {
    const response = await fetch(`${this._baseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    const responseJSON = await response.json();
    return responseJSON;
  }

  async getAllPeople() {
		const response = await this.getResourse(`/people`);
    return response.results.map(this._transformPerson);
  }

  getPersonById(id) {
    return this.getResourse(`/people/${id}`)
      .then(this._transformPerson)
      .catch((e) => console.log(e));
  }

  async getAllPlanets() {
    const response = await this.getResourse(`/planets`);
    return response.results.map(this._transformPlanet);
  }

  getPlanetById(id) {
    return this.getResourse(`/planets/${id}`)
      .then(this._transformPlanet)
      .catch((e) => console.log(e));
  }

  async getAllStarships() {
    const response = await this.getResourse(`/starships`);
    return response.results;
  }

  async getStarshipById(id) {
    return await this.getResourse(`/starships/${id}`);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet.url),
      population: planet.population,
      planetName: planet.name,
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
}
