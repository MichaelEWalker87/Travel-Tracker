import moment from 'moment';

class Trips {
  constructor(trip) {
    this.id = trip.id;  // number
    this.userID = trip.userID;  // number
    this.destinationID = trip.destinationID
    this.travelers = trip.travelers;  // number
    this.date = trip.date;  // string
    this.duration = trip.duration; // number
    this.status = trip.status || "pending"; // string
    this.suggestedActivities = trip.suggestedActivities ; // array
    this.price = 0;
    this.agentFee = 0;
    this.endDate = moment(this.date, "YYYY/MM/DD")
                   .add(this.duration, 'days')
                   .format("YYYY/MM/DD");
  }

  calculatePrice(destinationData) {
    let selectedDestination = destinationData.find((destination, i) => {
      return  this.destinationID === destination.id
    })
    let cost = (
      (this.duration * selectedDestination.estimatedLodgingCostPerDay * this.travelers)
      +
      (this.travelers * selectedDestination.estimatedFlightCostPerPerson)
    )
    // console.log("what's going on I said heeeey", cost)
    let agentFeeNumber = (cost * 0.10);
    this.agentFee = (Math.round(((cost * 0.10)* 100)) / 100);
    let totalPrice = (Math.round(((cost + agentFeeNumber) * 100)) / 100)
    this.price = totalPrice;
  }

  submitRequest() {

  }
}

export default Trips;
