import { expect } from 'chai';

import Travelers from '../src/travelers';
import travelers from '../src/data/travelers-data';

describe('Travelers', () => {
  let traveler, traveler2, traveler3
  beforeEach(() => {
    traveler = new Travelers(travelers[1])
    traveler2 = new Travelers(travelers[2])
    traveler2 = new Travelers(travelers[3])
  });

  it("should be a function", () => {
    expect(Travelers).to.be.a("function");
  });

  it("should be an instance of Travelers", () => {
    expect(traveler).to.be.an.instanceOf(Travelers);
  });

});
