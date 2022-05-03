import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:5000/api/order';
  constructor(private http: HttpClient) { }

  getOrders() {
    return lastValueFrom(this.http.get<Order[]>(this.baseUrl));
  }

  saveOrder(order: Order) {
    return lastValueFrom(this.http.post(this.baseUrl, order));
  }
}
