
import { Component } from '@angular/core';
import { CartserviceService } from './cartservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleRouteApp';
  name:string="Ramesh";

  inputCartNumber:number=0;
  cartService:CartserviceService;
  constructor(cs:CartserviceService) {
    this.cartService=cs;
   }


  getCartNumber():number{
    this.inputCartNumber=this.cartService.getCartNumber();
    return this.inputCartNumber;
  }


}
