import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:5000/api/product';
  constructor(private http: HttpClient) {}

  getProducts() {
    return lastValueFrom(this.http.get<Product[]>(this.baseUrl));
  }

  saveProduct(product: Product) {
    return lastValueFrom(this.http.post<Product>(this.baseUrl, product));
  }

  deleteProduct(id: number) {
    return lastValueFrom(this.http.delete(`${this.baseUrl}/${id}`));
  }
}
