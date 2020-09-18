class Travelers {
  constructor(traveler) {
    this.id = traveler.id; //(number)
    this.travelerType = traveler.travelerType; //(string)
    this.name = traveler.name;
    this.userName = ""; // (string) traveler.userName
    this.password = ""; // (string) traveler.password
    this.past = []; //  ([] of {}) traveler.past
    this.present = []; // ([] of {}) traveler.present
    this.upcoming = []; // ([] of {}) traveler.upcoming
    this.pending = []; // ([] of {}) traveler.pending
    this.travelersTotal = 0; //(number) traveler.travelersTotal
  }

  passwordUpdate() {

  }

  userNameUpdate() {

  }
}
module.exports = Travelers;
