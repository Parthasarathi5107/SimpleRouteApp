
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
 
  productModel:ProductDetails = new ProductDetails('',0,'');
  
  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("==>on submit "+this.productModel.productName);
  }

}
