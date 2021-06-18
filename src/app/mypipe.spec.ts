import { Mypipe } from './mypipe';

describe('Mypipe', () => {
  it('should create an instance', () => {
    expect(new Mypipe()).toBeTruthy();
  });

  it('should return substring',()=>{
    expect(new Mypipe().transform("describe this")).toBe("desc...");
  });

});
