import { expect } from 'chai';

import Trips from '../src/trips';
import tripsData from '../src/data/trips-data';

describe('Trips', () => {
  let trip, trip2, trip3
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

});
