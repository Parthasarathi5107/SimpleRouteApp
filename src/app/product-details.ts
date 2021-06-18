export class ProductDetails {
    productId !:number;
    productName !:string;
    productCost !:number;
    productRating !:number;
    productCategory !:string;

    constructor(productId:number,
        productName:string,
        productCost:number,
        productRating:number,
        productCategory:string){

            this.productId=productId;
            this.productName=productName;
            this.productCost=productCost;
            this.productRating = productRating;
            this.productCategory=productCategory;
            
        }
}
