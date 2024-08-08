import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ){}

  product: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      this.getProductDetail(id);
    });
  }

  getProductDetail(id: number): void {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
}
