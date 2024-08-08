import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductListComponent } from './public/product-list/product-list.component';
import { ProductDetailsComponent } from './public/product-details/product-details.component';
import { OrdersComponent } from './public/orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListFormComponent } from './public/product-list-form/product-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './public/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    OrdersComponent,
    ProductListFormComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
