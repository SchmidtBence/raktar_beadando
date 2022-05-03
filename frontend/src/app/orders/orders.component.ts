import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  errorMessage ?: string;
  constructor(private orderService: OrderService) { }

  async ngOnInit() {
    try {
      this.orders = await this.orderService.getOrders();

      if(this.orders.length === 0) {
        this.errorMessage = "Nincsenek rendelések az adatbázisban!"
      }
    } catch(err) {
      console.log(err)
      this.errorMessage = (err as HttpErrorResponse).error;
    }
  }
}
