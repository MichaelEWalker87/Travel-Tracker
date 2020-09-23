import moment from 'moment';

class Trips {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status || "pending"; 
    this.suggestedActivities = trip.suggestedActivities ; // array
    this.price = 0;
    this.agentFee = 0;
    this.endDate = moment(this.date, "YYYY/MM/DD")
                   .add(this.duration, 'days')
                   .format("YYYY/MM/DD");
  }

  calculatePrice(destinationData) {
    let selectedDestination = destinationData;
    if(Array.isArray(destinationData)){
      selectedDestination = destinationData.find((destination, i) => {
        return  this.destinationID === destination.id
      })
    } else {
      selectedDestination = destinationData
    }
    let cost = (
      (this.duration * selectedDestination.estimatedLodgingCostPerDay * this.travelers)
      +
      (this.travelers * selectedDestination.estimatedFlightCostPerPerson)
    )
    let agentFeeNumber = (cost * 0.10);
    this.agentFee = (Math.round(((cost * 0.10)* 100)) / 100);
    let totalPrice = (Math.round(((cost + agentFeeNumber) * 100)) / 100)
    this.price = totalPrice;
  }

  submitRequest() {

  }
}

export default Trips;
