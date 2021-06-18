

import {  HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductDetails } from '../product-details';
import { ProductService } from '../product.service';

import { LaptopComponent } from './laptop.component';

describe('LaptopComponent', () => {
  let component: LaptopComponent;
  let fixture: ComponentFixture<LaptopComponent>;
  let productService:ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopComponent ],
      imports:[HttpClientModule],
      providers:[ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    productService = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get laptop list from endpoint', () => {

    let mockdata:ProductDetails[] = [{productId:1,productName:'HP', productCost:45000,productRating:4,productCategory:'Laptop'},
                                      {productId:2,productName:'HP', productCost:45000,productRating:4,productCategory:'Laptop'}];

      let actualResponse:ProductDetails[] = [];
     spyOn(productService, 'getAllLaptopList').and.returnValue(of(mockdata));
     productService.getAllLaptopList().subscribe(data=>{
      actualResponse = data;
    });

       expect(mockdata).toEqual(actualResponse);
    });
});
