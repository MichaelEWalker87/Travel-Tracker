import moment from 'moment';

class Travelers {
  constructor(traveler) {
    this.id = traveler.id; //(number)
    this.travelerType = traveler.travelerType; //(string)
    this.name = traveler.name;
    this.userName = ""; // (string) traveler.userName
    this.password = ""; // (string) traveler.password
    this.userTotalTrips = [];
    this.past = []; //  ([] of {}) traveler.past
    this.present = []; // ([] of {}) traveler.present
    this.upcoming = []; // ([] of {}) traveler.upcoming
    this.pending = []; // ([] of {}) traveler.pending
    this.travelersTotal = 0; //(number) traveler.travelersTotal
  }

  getUserTripData(tripsData) {
    this.usersTrips = tripsData.forEach((trip) => {
      if(trip.userID === this.id) {
        this.userTotalTrips.push(tripsData)
      }
    });
  }

  loadTravelerPast() {
  // const start = Date.now();
  // let now = new Date(start)
  // tripsData.forEach((item, i) => {
  //   if(tripsData.id === this.id && tripsData.date)
  // });
  }

  loadTravelerPresent() {

  }

  loadTravelerUpcoming() {

  }

  loadTravelerPending() {

  }

  passwordUpdate() {

  }

  userNameUpdate() {

  }
}

export default Travelers;
