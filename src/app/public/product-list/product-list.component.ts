import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent{

  constructor(private productSerice: ProductService){}
  
  productList: Product[] = []
  ngOnInit(): void {
    
    this.productSerice.getProductList().subscribe(
      {
        next: res => {
          this.productList = res;
        },
        error: err =>{
          console.log(err)
        }
      }
    );
  }



}
