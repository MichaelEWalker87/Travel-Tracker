class Trips {
  constructor(trip){
    this.id = trip.id;  // number
    this.userID = trip.userID;  // number
    this.travelers = trip.travelers;  // number
    this.date = trip.date;  // string
    this.duration = trip.duration; // number
    this.status = trip.status; // string
    this.suggestedActivities = trip.suggestedActivities ; // array
  }
}
module.exports = Trips;
