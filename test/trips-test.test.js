import { expect } from 'chai';
import moment from 'moment';

import Trips from '../src/trips';
import Destinations from '../src/destinations';
import tripsData from '../src/data/trips-data';
import destinationData from '../src/data/destinations-data';

describe('Trips', () => {
  let trip, trip2, trip3, destinationsInstantiated, destination1, destination2;
  let destination3, destination4, destination5, destination6;
  beforeEach(() => {
    destinationsInstantiated = [
      destination1 = new Destinations(destinationData[0]),
      destination2 = new Destinations(destinationData[1]),
      destination3 = new Destinations(destinationData[2]),
      destination4 = new Destinations(destinationData[3]),
      destination5 = new Destinations(destinationData[4]),
      destination6 = new Destinations(destinationData[5]),
    ];
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
      expect(trip.date).to.be.equal("2020/09/16");
    });

    it("should be able to store the trip duration", () => {
      expect(trip.duration).to.be.equal(18);
    });

    it("should be able to store the trip duration", () => {
      expect(trip.status).to.be.equal("approved");
    });

    it("should be able to store the trip duration", () => {
      expect(trip.suggestedActivities).to.deep.equal([]);
    });

    it("should be able to calculate the end date of trip", () => {
      expect(trip.endDate).to.be.equal("2020/10/04");
    });

    it("should start with the price of trip being zero", () => {
      expect(trip.price).to.be.equal(0);
    });

    it("should start with the price of trip being zero", () => {
      expect(trip.agentFee).to.be.equal(0);
    });

    it("should start with the price of trip being zero", () => {
      expect(trip.destinationID).to.be.equal(49);
    });
  });

  describe('Methods of Trips', () => {

    it("should be able to calculate the price for a trip", () => {
      trip.calculatePrice(destinationsInstantiated)
      expect(trip.price).to.be.equal(12969);
    });

    it("should be able to calculate the agentFee for a trip", () => {
      trip.calculatePrice(destinationsInstantiated)
      expect(trip.agentFee).to.be.equal(1179);
    });
  });
});
