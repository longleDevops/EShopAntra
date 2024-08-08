import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product-list-form',
  templateUrl: './product-list-form.component.html',
  styleUrl: './product-list-form.component.css'
})
export class ProductListFormComponent implements OnInit{
  productForm!: FormGroup ;
  formStatus:string | null = null;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0.01)]],
      qty: [null, [Validators.required, Validators.min(1)]],
      productImg: ['', Validators.required],
      sku: ['', Validators.required],
      productCategoryId: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    const newProduct: Product = this.productForm.value;
    this.productService.createProduct(newProduct).subscribe(
     {
      next: res=>{
        console.log('Product created successfully!', res);
        this.formStatus='successful';
        this.productForm.reset();
      },
      error: err=>{
        this.formStatus='failed';
        console.log(err);
      }
     }
    );
  }
}
