import { expect } from 'chai';

import Travelers from '../src/travelers';
import travelerData from '../src/data/travelers-data';

describe('Travelers', () => {
  let traveler, traveler2, traveler3
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

});
