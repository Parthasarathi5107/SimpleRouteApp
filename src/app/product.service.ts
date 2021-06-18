import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './product-details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  // constructor() {

  //  }

  // laptopList:ProductDetails[]=[];
  // cameraList:ProductDetails[]=[];
  //    mobileList:ProductDetails[]=[];

  // addProduct(product:ProductDetails){
  //   if(product.productCategory == 'Laptop'){
  //     this.laptopList.push(product);
  //     console.log(this.laptopList.length);
  //   }
  //   else if(product.productCategory == 'Camera'){
  //     this.cameraList.push(product);
  //     console.log(this.cameraList.length);
  //   }
  //   else {
  //     this.mobileList.push(product);
  //     console.log(this.mobileList.length);
  //   }
  // }
  
  // getAllLaptops():ProductDetails[]{
    
  //   return this.laptopList;
  // }

  // getAllCameras():ProductDetails[]{
    
  //   return this.cameraList;
  // }

  // getAllMobiles():ProductDetails[]{
    
  //   return this.mobileList;
  // }

  laptopArray:ProductDetails[] = [];
  cameraArray:ProductDetails[] = [];
  mobileArray:ProductDetails[]= [];
 
  private address = 'http://localhost:9001';
  private getAllLaptop_endpoint = this.address+'/api/product';
  private getAllCamera_endpoint = this.address+'/api/product';
  private getAllMobile_endpoint = this.address+'/api/product';
  private update_endpoint = this.address+'/api/product/{id}';
  

  constructor(private http:HttpClient) { }

  

  getAllLaptopList():Observable<ProductDetails[]>
  {
    console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<ProductDetails[]>(`${this.getAllLaptop_endpoint}`);
  }

  createLaptop(product:ProductDetails):Observable<Object>
  {
    
    return this.http.post<ProductDetails>(`${this.getAllLaptop_endpoint}`,product);
  }
  
  updateLaptop(id:number):Observable<ProductDetails>
  {
    return this.http.put<ProductDetails>(`${this.update_endpoint}/${id}`,id);
  }

  getAllCameraList():Observable<ProductDetails[]>
  {
    console.log('Product Service Camera - Get Instructor called ');
    return this.http.get<ProductDetails[]>(`${this.getAllCamera_endpoint}`);
  }

 
  getAllMobileList():Observable<ProductDetails[]>
  {
    return this.http.get<ProductDetails[]>(`${this.getAllMobile_endpoint}`);
  }
}
