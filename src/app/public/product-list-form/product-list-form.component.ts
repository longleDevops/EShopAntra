import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-list-form',
  templateUrl: './product-list-form.component.html',
  styleUrl: './product-list-form.component.css'
})
export class ProductListFormComponent implements OnInit{
  productForm!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group(
      {
        name: [''],
        description: [''],
        price: [0],
        qty: [0],
        productImg: [''],
        sku: [''],
        productCategoryId: [0]
      }
    )
  }

  onSubmit(): void {
    const newProduct: Product = this.productForm.value;
    this.productService.createProduct(newProduct).subscribe(
     {
      next: res=>{
        console.log('Product created successfully!', res);
        this.productForm.reset();
      },
      error: err=>{
        console.log(err);
      }
     }
    );
  }
}
