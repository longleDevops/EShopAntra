import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './public/product-list/product-list.component';
import { ProductDetailsComponent } from './public/product-details/product-details.component';
import { OrdersComponent } from './public/orders/orders.component';

const routes: Routes = [
  {path:"", component:ProductListComponent},
  {path:"Details/:id", component:ProductDetailsComponent},
  {path:"Orders", component:OrdersComponent},
  {path:"Account", loadChildren: ()=> import('./account/account.module').then(m=>m.AccountModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
