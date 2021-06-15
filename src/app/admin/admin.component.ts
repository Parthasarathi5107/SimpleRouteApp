import { ProductService } from './../product.service';
import { LaptopComponent } from './../laptop/laptop.component';

import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 __productService:ProductService;
  constructor(ps:ProductService) { 
    this.__productService=ps;
  }
 
  productModel:ProductDetails = new ProductDetails('',0,'');
  
  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.productModel.productName);
    this.__productService.addProduct(this.productModel);
  }

}
