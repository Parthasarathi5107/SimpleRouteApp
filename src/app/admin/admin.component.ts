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

  id!:number;
  productDetails:ProductDetails = new ProductDetails(0,"",0,0,"");
  updateDetails: ProductDetails = new  ProductDetails(0,"",0,0,"");
  updatedProduct:ProductDetails = new ProductDetails(0,"",0,0,"");
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
  }
 
  onSubmit()
  {
    console.log(this.productDetails);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.productService.createLaptop(this.productDetails).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

  doUpdate(){
    console.log(this.productDetails);
    this.doUpdateOnServer();
  }

  doUpdateOnServer()
  {
    
    this.productService.updateLaptop(this.id)
        .subscribe(data=>{
          this.updateDetails = data;
          console.log(" Data Updted !!! "+this.updateDetails.productId);
        },
        error=>console.log(error)
        )
  }
}
