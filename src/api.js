let api = {

  getTravelers() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      .catch(err => console.log(err));
    return promise;
  },

  getOneTraveler() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/2"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      .catch(err => console.log(err));
    return promise;
  },

  getAllTrips() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      .catch(err => console.log(err));
    return promise;
  },

  getAllDestinations() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      .catch(err => console.log(err));
    return promise;
  },

  addTrip(newTrip) {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips"
    const promise = fetch(userDataApi, {
      method: 'POST',
      headers: {
  	     'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrip),
    })
      .then (response => response.json())
      .then (response => console.log(response))
      .catch(err => console.log(err));
    return promise;
  },
}

export default api;
