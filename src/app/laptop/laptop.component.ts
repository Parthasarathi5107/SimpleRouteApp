import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartserviceService) {
    this.__productService=ps;
   }

  ngOnInit(): void {
  }

  getAllLaptops():ProductDetails[]{
    console.log("laptop");
    return this.__productService.getAllLaptops();
  }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
  }
}
