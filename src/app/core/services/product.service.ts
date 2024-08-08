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
  getByIdUrl:string = environment.baseUrl + '/api/Product/GetProductById';
  createUrl:string = environment.baseUrl + '/api/Product/CreateProduct';
  deleteUrl:string = environment.baseUrl + '/api/Product/DeleteProduct';

  getProductList():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.getUrl);
  }
  getProductById(id:number):Observable<Product> {
    return this.httpClient.get<Product>(`${this.getByIdUrl}/${id}`);
  }
  createProduct(product: Product):Observable<Product> {
    return this.httpClient.post<Product>(this.createUrl,product);
  }
  deleteProduct(id: number):Observable<number>{
    return this.httpClient.delete<number>(`${this.deleteUrl}/${id}`)
  }
}
