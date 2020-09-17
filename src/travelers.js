class Travelers {
  constructor(traveler) {
    this.id =  traveler.id; //(number)
    this.travelerType = traveler.travelerType; //(string)
    this.userName = traveler.userName; // (string)
    this.password = traveler.password; // (string)
    this.past =  traveler.past; //  ([] of {})
    this.present =  traveler.present; // ([] of {})
    this.upcoming =  traveler.upcoming; // ([] of {})
    this.pending =  traveler.pending; // ([] of {})
    this.travelersTotal =  traveler.travelersTotal; //(number)
  }

  passwordUpdate() {

  }

  userNameUpdate() {

  }
}
module.exports = Travelers;
