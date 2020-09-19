class Destinations {
  constructor(getAway) {
    this.id = getAway.id;  // number
    this.destination = getAway.destination;  // number
    this.estLodgingCostPerDay = getAway.estLodgingCostPerDay;  // number
    this.estFlightCostPerPerson = getAway.estFlightCostPerPerson; //number
    this.image = getAway.image //string
    this.alt = getAway.alt //string
  }
}
module.exports = Destinations;
