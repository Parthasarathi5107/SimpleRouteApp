

import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService : CartserviceService) { }

  ngOnInit(): void {
  }

  // 
  
  getAllProducts():ProductDetails[]{
    return this.cartService.getAllProducts();
  }
}
