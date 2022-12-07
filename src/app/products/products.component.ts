import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProduct: Product[];
  title="hello";
  prix=100;
  constructor(private ps:ProductService) //Injection 
   {
    console.log("ngOnInit")

   }
buy(p:Product)
{
  p.quantity=p.quantity-1;
}

like(p:Product)
 {
  p.like=p.like+1;
 }
  ngOnInit(): void {
    /*this.listProduct=
    [
      {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
    ]
      */
 

   // this.listProduct=this.ps.getAllProduct();
   this.ps.getAllProductsFromDB().subscribe(res=>this.listProduct=res);
}
}
