import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './public/product-list/product-list.component';
import { ProductDetailsComponent } from './public/product-details/product-details.component';
import { OrdersComponent } from './public/orders/orders.component';
import { LoginComponent } from './account/login/login.component';
import { ProductListFormComponent } from './public/product-list-form/product-list-form.component';
import { HomePageComponent } from './public/home-page/home-page.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"ProductForm", component:ProductListFormComponent},
  {path:"Products",component:ProductListComponent},
  {path:"Details/:id", component:ProductDetailsComponent},
  {path:"Orders", component:OrdersComponent},
  {path:"Account", loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
