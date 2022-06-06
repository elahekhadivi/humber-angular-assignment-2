import { Component, OnInit } from '@angular/core';
import { orderData } from 'src/app/Models/order-data';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders : orderData[] =[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getOrderData().subscribe((res:any) =>{
      this.orders = res;
    })
  }

}
