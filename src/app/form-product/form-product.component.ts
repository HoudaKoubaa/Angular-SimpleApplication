import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements  OnInit {

  list : Product[];
  p:Product = new Product();
  constructor(private ps:ProductService, private route:Router) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.ps.addProduct(this.p).subscribe(()=>this.route.navigateByUrl("/products"));
  }

}