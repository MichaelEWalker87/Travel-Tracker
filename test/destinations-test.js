import { expect } from 'chai';

import Destinations from '../src/destinations';
import destinationData from '../src/data/destinations-data';

describe('Destinations', () => {
  let destination, destination2, destination3;
  beforeEach(() => {
    destination = new Destinations(destinationData[0])
    destination2 = new Destinations(destinationData[1])
    destination3 = new Destinations(destinationData[2])
  });

  it("should be a function", () => {
    expect(Destinations).to.be.a("function");
  });

  it("should be an instance of Travelers", () => {
    expect(destination).to.be.an.instanceOf(Destinations);
  });

});
