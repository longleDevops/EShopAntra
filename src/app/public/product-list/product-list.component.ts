import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  constructor(private productSerice: ProductService){}
  
  productList:Product[] = [];
  
  ngOnInit(): void {
    for(let i=0;i<5;i++){
      this.productList.push({Id:i,Name:"Example"})

    }

    var ourList = this.productSerice.GetProductList().subscribe(p=>{
      
    });
  }



}
