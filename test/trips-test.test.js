import { expect } from 'chai';
import moment from 'moment';

import Trips from '../src/trips';
import tripsData from '../src/data/trips-data';

describe('Trips', () => {
  let trip, trip2, trip3;
  beforeEach(() => {
    trip = new Trips(tripsData[0]);
    trip2 = new Trips(tripsData[1]);
    trip3 = new Trips(tripsData[2]);
  });

  it("should be a function", () => {
    expect(Trips).to.be.a("function");
  });

  it("should be an instance of Trips", () => {
    expect(trip).to.be.an.instanceOf(Trips);
  });

  describe('Properties of Trips', () => {

    it("should be able to store a trip id", () => {
      expect(trip.id).to.be.equal(1);
    });

    it("should be able to store another trip id", () => {
      expect(trip2.id).to.be.equal(2);
    });

    it("should be able to store a user id", () => {
      expect(trip.userID).to.be.equal(44);
    });

    it("should be able to store number of travelers", () => {
      expect(trip.travelers).to.be.equal(1);
    });

    it("should be able to store date of trip", () => {
      expect(trip.date).to.be.equal("2019/09/16");
    });

    it("should be able to store the trip duration", () => {
      expect(trip.duration).to.be.equal(8);
    });

    it("should be able to store the trip duration", () => {
      expect(trip.status).to.be.equal("approved");
    });

    it("should be able to store the trip duration", () => {
      expect(trip.suggestedActivities).to.deep.equal([]);
    });

    it("should be able to calculate the end date of trip", () => {
      expect(trip.endDate).to.be.equal("2019/09/24");
    });

  });

  describe('Methods of Trips', () => {

    // it("should be able to store the trip duration", () => {
    //   trip.getUserTripData(tripsData)
    //   expect(trip.suggestedActivities).to.be.equal(0);
    // });

  });
});
