import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { HttpClientModule } from '@angular/common/http';

@Injectable({ //Decorateur de classe
  providedIn: 'root' //metadata
})
export class ProductService {

  constructor() { }
getAllProductsFromDB()
{

}
  getAllProduct(){
    return [
      {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
    ]
  }

  }

