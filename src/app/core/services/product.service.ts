import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getUrl:string = environment.baseUrl + '/api/Product/GetAllProducts';
  createUrl:string = environment.baseUrl + '/api/Product/CreateProduct';
  getProductList():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getUrl);
  }

  createProduct(product: Product):Observable<Product> {
    return this.httpClient.post<Product>(this.createUrl,product);
  }
}
