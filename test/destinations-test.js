import { expect } from 'chai';

import Destinations from '../src/destinations';
import destinationData from '../src/data/destinations-data';

describe('Destinations', () => {
  let destination1, destination2, destination3;
  beforeEach(() => {
    destination1 = new Destinations(destinationData[0])
    destination2 = new Destinations(destinationData[1])
    destination3 = new Destinations(destinationData[2])
  });

  it("should be a function", () => {
    expect(Destinations).to.be.a("function");
  });

  it("should be an instance of Travelers", () => {
    expect(destination1).to.be.an.instanceOf(Destinations);
  });

  describe('Properties of Destinations', () => {

    it("should be able to store a destination id", () => {
      expect(destination1.id).to.be.equal(22);
    });

    it("should be able to store a destination name", () => {
      expect(destination1.destination).to.be.equal("Rome, Italy");
    });

    it("should be able to store another destination name", () => {
      expect(destination2.destination).to.be.equal("New York, New York");
    });

    it("should be able to store estimated lodging cost per day", () => {
      expect(destination2.estLodgingCostPerDay).to.be.equal(175);
    });

    it("should be able to store estimated flight cost per person", () => {
      expect(destination2.estimatedFlightCostPerPerson).to.be.equal(200);
    });

    it("should be able to store another destination image", () => {
      expect(destination2.image).to.be.equal("https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    });

    it("should be able to store another destination alt", () => {
      expect(destination2.alt).to.be.equal("people crossing the street during the day surrounded by tall buildings and advertisements");
    });
  });
});
