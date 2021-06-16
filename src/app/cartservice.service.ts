import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }

  cartNumber:number=0;
  
  items: ProductDetails[] = [];

  addToCart(product:ProductDetails ) {
    this.items.push(product);
    this.cartNumber = this.items.length;
  }

  getAllProducts():ProductDetails[]
  {
    return this.items;
  }

  getCartNumber(){
    return this.cartNumber;
  }
}
