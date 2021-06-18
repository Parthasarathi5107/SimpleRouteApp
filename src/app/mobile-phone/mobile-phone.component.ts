
import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.component.html',
  styleUrls: ['./mobile-phone.component.css']
})
export class MobilePhoneComponent implements OnInit {

   mobiles !: ProductDetails[];
  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartserviceService) {
    this.__productService=ps;
   }

  ngOnInit(): void {
  }

  // getAllMobiles():ProductDetails[]{
  //   return this.__productService.getAllMobiles();
  // }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
  }

  // getAllMobiles()
  // {
  //   this.__productService.getAllMobileList().subscribe( data =>{
  //       this.mobiles = data;
  //   },
  //   err=>
  //   {
  //     console.log(err.error);
  //   }
    
  //   );
    
  // }
  
}
