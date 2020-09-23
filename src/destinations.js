class Destinations {
  constructor(getAway) {
    this.id = getAway.id;
    this.destination = getAway.destination;
    this.estimatedLodgingCostPerDay = getAway.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = getAway.estimatedFlightCostPerPerson;
    this.image = getAway.image
    this.alt = getAway.alt 
  }
}

export default Destinations;
