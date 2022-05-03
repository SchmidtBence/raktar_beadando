import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { OrdersComponent } from './orders/orders.component';
import { AddPartComponent } from './parts/add-part/add-part.component';
import { IncreasePartAmountComponent } from './parts/increase-part-amount/increase-part-amount.component';
import { PartsComponent } from './parts/parts.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: "",
    component: PartsComponent
  },
  {
    path: "parts",
    component: PartsComponent
  },
  {
    path: "parts/add",
    component: AddPartComponent
  },
  {
    path: "parts/increase",
    component: IncreasePartAmountComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "products/add",
    component: AddProductComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "orders/add",
    component: AddOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
