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
  message: string | null = null;

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

  // this is a void method
  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productSerice.deleteProduct(id).subscribe(
      {
        next: res => {
          this.productList = this.productList.filter(p => p.id !== id);
          this.message = 'Product deleted successfully!';

          console.log(res);
        },
        error: err =>{
          this.message = 'Product deleted failed!';

          console.log(err)
        }
      }
    )

    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



}
