class Travelers {
  constructor(traveler) {
    this.id =  traveler.id; //(number)
    this.travelerType = traveler.travelerType; //(string)
    this.userName = traveler.userName; // (string)
    this.password = traveler.password; // (string)
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
