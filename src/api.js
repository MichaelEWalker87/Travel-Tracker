let api = {

  getTravelers() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      // .then(users => users.wcUsersData.find((user) => user.id === userID))
    return promise;
  },

  getOneTraveler() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/2"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      // .then(users => users.wcUsersData.find((user) => user.id === userID))
    return promise;
  },

  getAllTrips() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      // .then(users => users.wcUsersData.find((user) => user.id === userID))
    return promise;
  },

  getAllDestinations() {
    const userDataApi = "https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations"
    const promise = fetch(userDataApi)
      .then (response => response.json())
      // .then(users => users.wcUsersData.find((user) => user.id === userID))
    return promise;
  },

}

export default api;
