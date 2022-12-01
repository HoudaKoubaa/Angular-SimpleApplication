import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { Product } from './shared/product';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"addProduct",component:FormProductComponent},
  {path:"/detail:/id",component:DetailsProductComponent},

  {path:"/detail:/id",component:DetailsProductComponent},
  {path:"**",component:NotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
