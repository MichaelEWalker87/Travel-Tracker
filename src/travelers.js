import moment from 'moment';

class Travelers {
  constructor(traveler) {
    this.id = traveler.id;
    this.travelerType = traveler.travelerType;
    this.name = traveler.name;
    this.username = `traveler${this.id}`;
    this.password = "travel2020";
    this.userTotalTrips = [];
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
    this.travelersTotal = 0;
  };

  getUserTripData(tripsData) {
     tripsData.forEach((trip) => {
      if(trip.userID === this.id) {
        this.userTotalTrips.push(trip)
      }
    });
  };

  loadTravelerPast(trips) {
    const start = Date.now();
    let now = new Date(start)
    this.userTotalTrips.forEach((trip) => {
      let tripDate = new Date(trip.endDate)
      if(tripDate < now && trip.status !== "pending") {
        this.past.push(trip)
      }
    });
  };

  loadTravelerPending(trips) {
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

  loadTravelerUpcoming(trips) {
    const start = Date.now();
    let now = new Date(start)
    this.userTotalTrips.forEach((trip) => {
      let tripDate = new Date(trip.date)
      if(tripDate > now && trip.status === 'approved') {
        this.upcoming.push(trip)
      }
    });
  };

  calculateTravelersTotalPrice(destinationData) {
    const thisYear = new Date(Date.now());
    let yearlyTotal = this.userTotalTrips.reduce((total, trip) => {
       trip.calculatePrice(destinationData);
       let tripYear = new Date(trip.date)
       if(thisYear.getFullYear() === tripYear.getFullYear()){
          total += trip.price;
       }
       return total
    }, 0);
    this.travelersTotal = yearlyTotal;
  };

export default Travelers;
