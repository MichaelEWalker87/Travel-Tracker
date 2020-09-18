import { expect } from 'chai';
import moment from 'moment';

import Travelers from '../src/travelers';
import travelerData from '../src/data/travelers-data';
import tripsData from '../src/data/trips-data';

describe('Travelers', () => {
  let traveler, traveler2, traveler3;
  beforeEach(() => {
    traveler = new Travelers(travelerData[0]);
    traveler2 = new Travelers(travelerData[1]);
    traveler3 = new Travelers(travelerData[2]);
  });


  it("should be a function", () => {
    expect(Travelers).to.be.a("function");
  });

  it("should be an instance of Travelers", () => {
    expect(traveler).to.be.an.instanceOf(Travelers);
  });

  describe('Properties of Travelers', () => {

    it("should be able to store a name", () => {
      expect(traveler.name).to.be.equal("Ham Leadbeater");
    });

    it("should be able to store another name", () => {
      expect(traveler2.name).to.be.equal("Marijo MacNeilley");
    });

    it("should be able to store a user traveler type", () => {
      expect(traveler.travelerType).to.be.equal("relaxer");
    });

    it("should be able to store a user id", () => {
      expect(traveler.id).to.be.equal(1);
    });

    it("should start with no trips in total trips", () => {
      expect(traveler.userTotalTrips).to.deep.equal([]);
    });

    it("should start with no past trips", () => {
      expect(traveler.past).to.deep.equal([]);
    });

    it("should start with no present trips", () => {
      expect(traveler.present).to.deep.equal([]);
    });

    it("should start with no upcoming trips", () => {
      expect(traveler.upcoming).to.deep.equal([]);
    });

    it("should start with no pending trips", () => {
      expect(traveler.pending).to.deep.equal([]);
    });

    it("should start with no pending trips", () => {
      expect(traveler.travelersTotal).to.be.equal(0);
    });
  });

  describe('Methods of Travelers', () => {

    it("should be able to get total trips for a user", () => {
      traveler2.getUserTripData(tripsData);

      expect(traveler2.userTotalTrips.length).to.be.equal(7);
    });

    it("should be able to get past trips for a user", () => {
      traveler2.getUserTripData(tripsData);
      traveler2.loadTravelerPast();

      expect(traveler2.past.length).to.be.equal(5);
    });

    // it("should be able to get past trips for a user", () => {
    //   traveler2.getUserTripData(tripsData);
    //   traveler2.loadTravelerPast();
    //
    //   expect(traveler2.past.length).to.be.equal(5);
    // });
  });
});
