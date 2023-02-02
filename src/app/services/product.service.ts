import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ //Decorateur de classe
  providedIn: 'root' //metadata
})
export class ProductService {
productUrl: string ="http://localhost:3000/products"
  constructor(  private myHttp: HttpClient) { }
getAllProductsFromDB():Observable<Product[]>
{ 
  return this.myHttp.get<Product[]>(this.productUrl);
}

addProduct(product:Product)
{
  return this.myHttp.post(this.productUrl,product)
}

deleteProduct(product:Product)
{
  return this.myHttp.delete(this.productUrl+"/"+ product.id)

}
  getAllProduct(){
    return [
      {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
    ]
  }
  updateProduct(product:Product):Observable<Product>{
    console.log(product);
    return this.myHttp.put<Product>(this.productUrl+"/"+product.id,
    product)
  }

  }

