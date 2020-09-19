import moment from 'moment';

class Trips {
  constructor(trip) {
    this.id = trip.id;  // number
    this.userID = trip.userID;  // number
    this.travelers = trip.travelers;  // number
    this.date = trip.date;  // string
    this.duration = trip.duration; // number
    this.status = trip.status; // string
    this.suggestedActivities = trip.suggestedActivities ; // array
    this.endDate = moment(this.date, "YYYY/MM/DD")
                    .add(this.duration, 'days')
                    .format("YYYY/MM/DD");
  }

  calculatePrice() {
    
  }

  submitRequest() {

  }
}

export default Trips;
