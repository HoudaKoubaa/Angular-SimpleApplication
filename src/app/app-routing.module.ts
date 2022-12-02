import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { FormProductComponent } from './form-product/form-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [

  {path:"", redirectTo:"products", pathMatch:"full"},
  {path:"products", component:ProductsComponent},
  {path:"detail/:id", component:DetailsProductComponent},
  {path:"addProduct", component:FormProductComponent},
  {path:"**", component:NotFoundComponent} //doit être toujours en dernière position
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
