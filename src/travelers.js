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
  };

  getUserTripData(tripsData) {
     tripsData.forEach((trip) => {
      if(trip.userID === this.id) {
        this.userTotalTrips.push(trip)
      }
    });
  };

  loadTravelerPast() {
    const start = Date.now();
    let now = new Date(start)
    this.userTotalTrips.forEach((trip) => {
      let tripDate = new Date(trip.date)
      if(tripDate < now) {
        this.past.push(trip)
      }
    });
  };

  loadTravelerPending() { //not tested yet
    this.userTotalTrips.forEach((trip) => {
      if(trip.status === "pending") {
        this.pending.push(trip)
      }
    });
  };

  loadTravelerPresent(trips) {
    const start = Date.now();
    let now = new Date(start)
    trips.forEach((trip) => {
      let tripDate = new Date(trip.date)
      let tripEnd = new Date(trip.endDate)
      if(tripDate <= now && tripEnd >= now && trip.status === 'approved') {
        this.present.push(trip)
      }
    });
  };

  loadTravelerUpcoming() {

  };

  passwordUpdate() {

  };

  userNameUpdate() {

  };
}

export default Travelers;
