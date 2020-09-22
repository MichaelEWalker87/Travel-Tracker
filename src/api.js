let api = {

  getAllServerData() {
    let allTravelersAPI = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers');
    let oneTravelerAPI = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/2');
    let allTripsAPI = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips');
    let allDestinationsAPI = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations');
    let promises = [allTravelersAPI, oneTravelerAPI, allTripsAPI, allDestinationsAPI];
    return Promise.all(promises)
    .then(responses => Promise.all(responses.map(response => response.json())))
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
      .catch(err => console.log(err));
    return promise;
  },
}

export default api;
