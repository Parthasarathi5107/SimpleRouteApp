
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

  cart:number=0;
  laptopName:string="";
  laptops !: ProductDetails[];
  laptop: ProductDetails = new  ProductDetails(0,"",0,0,"");
  id!:number;

  __productService:ProductService;
  constructor(ps:ProductService,private cartService:CartserviceService) {
    this.__productService=ps;
    this.getAllLaptops();
    this.doSaveTOServer();
   }

   ngOnInit(): void {
  }

  getAllLaptops():ProductDetails[]
  {
    this.__productService.getAllLaptopList().subscribe( data =>{
        this.laptops = data;
    },
    err=>
    {
      console.log(err.error);
    }
    
    );
    //console.log(this.laptops.length);
    return this.laptops;
  }

  addToCart(product:ProductDetails){
    this.cartService.addToCart(product);
    this.cart++;
  }

  doSaveTOServer()
  {
    this.__productService.createLaptop(this.laptop).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

  doUpdateOnServer()
  {
    
    this.__productService.updateLaptop(this.id)
        .subscribe(data=>{
          this.laptop = data;
          console.log(" Data Updted !!! "+this.laptop.productId);
        },
        error=>console.log(error)
        );
  }
  
}
