import { ProductDetails } from './product-details';
import { Myclass } from './myclass';

describe('Myclass', () => {
  it('should create an instance', () => {
    expect(new Myclass()).toBeTruthy();
  });
  it('should create formatted name', () => {
    expect(new Myclass().doThings('Ramesh')).toBe('[Ramesh]');
  });

  it('should create an instance', () => {
    expect(new Myclass().doStringWorks('Ramesh@gmail.com')).toBe('gmail.com');
  });

  it('should create an product output', () => {
    let mockOutput:ProductDetails={productId:1,
      productName:'Hp-123',
      productCost:45000,
      productRating:4,
      productCategory:'Laptop'}
    expect(new Myclass().getProduct()).toEqual(mockOutput);
  });
});
