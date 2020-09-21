class Destinations {
  constructor(getAway) {
    this.id = getAway.id;  // number
    this.destination = getAway.destination;  // number
    this.estimatedLodgingCostPerDay = getAway.estimatedLodgingCostPerDay;  // number
    this.estimatedFlightCostPerPerson = getAway.estimatedFlightCostPerPerson; //number
    this.image = getAway.image //string
    this.alt = getAway.alt //string
  }
}
module.exports = Destinations;
