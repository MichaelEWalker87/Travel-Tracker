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
    this.agentFee = 0;
    this.endDate = moment(this.date, "YYYY/MM/DD")
                    .add(this.duration, 'days')
                    .format("YYYY/MM/DD");
  }

  calculatePrice(destinationData) {
    let selectedDestination = destinationData.find(destination => {
      return  this.destinationID === destination.id
    })
    let cost = (
      (this.duration * selectedDestination.estimatedLodgingCostPerDay * this.travelers)
      +
      (this.travelers * selectedDestination.estimatedFlightCostPerPerson)
    )
    let agentFeeNumber = (cost * 0.10);
    this.agentFee = (((cost * 0.10)* 100) / 100).toFixed(2);
    let totalPrice = (((cost + agentFeeNumber) * 100) / 100).toFixed(2)
    this.price = totalPrice;
  }

  submitRequest() {

  }
}

export default Trips;
