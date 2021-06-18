import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productname:string;

  constructor(private activatedRouter:ActivatedRoute) {
    this.productname = this.activatedRouter.snapshot.params['productname'];
    this.getProductDetails();
   }

  ngOnInit(): void {
  }

  getProductDetails()
  {
    // through service -> fetch the product details by productName
    console.log("=======>> Product Name "+ this.productname);
  }

}
