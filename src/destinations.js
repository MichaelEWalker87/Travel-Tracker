class Destinations {
  constructor(getAway) {
    this.id = getAway.id;  // number
    this.destination = getAway.destination;  // number
    this.estLodgingCostPerDay = getAway.estimatedLodgingCostPerDay;  // number
    this.estFlightCostPerPerson = getAway.estimatedFlightCostPerPerson; //number
    this.image = getAway.image //string
    this.alt = getAway.alt //string
  }
}

export default Destinations;
