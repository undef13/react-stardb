export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";

  async getResourse(url) {
		const response = await fetch(`${this._baseUrl}${url}`);
		
		if (!response.ok) {
			throw new Error(`Could not fetch ${url}, received ${response.status}`);
		}

    return await response.json();
  }

  async getAllPeople() {
		const response = await this.getResourse(`/people`);
    return response.results;
	}
	
	async getPersonById(id) {
		return await this.getResourse(`/people/${id}`);
	}

	async getAllPlanets() {
		const response = await this.getResourse(`/planets`);
		return response.results;
	}

	async getPlanetById(id) {
		return await this.getResourse(`/planets/${id}`);
	}

	async getAllStarships() {
		const response = await this.getResourse(`/starships`);
		return response.results;
	}

	async getStarshipById(id) {
		return await this.getResourse(`/starships/${id}`);
	}
}