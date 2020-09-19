import moment from 'moment';

class Trips {
  constructor(trip) {
    this.id = trip.id;  // number
    this.userID = trip.userID;  // number
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers;  // number
    this.date = trip.date;  // string
    this.duration = trip.duration; // number
    this.status = trip.status; // string
    this.suggestedActivities = trip.suggestedActivities ; // array
    this.price = 0;
    this.endDate = moment(this.date, "YYYY/MM/DD")
                    .add(this.duration, 'days')
                    .format("YYYY/MM/DD");
  }

  calculatePrice(destinationData) {
    // let selected = destinationData.find((destination) => {
    //   return destination.
    // })
    // let cost = (
    //   (this.duration * destinationData.estimatedLodgingCostPerDay * this.travelers)
    //   +
    //   (this.travelers * destinationData.estimatedFlightCostPerPerson)
    // )
    // this.price = Math.round(((cost * 0.1) + cost) * 100)/100
    //
    // console.log(destinationData)
  }

  submitRequest() {

  }
}

export default Trips;
