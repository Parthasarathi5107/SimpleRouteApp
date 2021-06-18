import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

   cameras !: ProductDetails[];
  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartserviceService) {
    this.__productService=ps;
   }

  ngOnInit(): void {
  }

  getAllCameras()
  {
    this.__productService.getAllCameraList().subscribe(data=>{
        this.cameras = data;
    },
    err=>
    {
      console.log(err.error);
    }
    
    );
  }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
  }
}
