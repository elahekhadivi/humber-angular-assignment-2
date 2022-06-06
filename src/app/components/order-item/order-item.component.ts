import { Component, OnInit, Input } from '@angular/core';
import { orderData } from 'src/app/Models/order-data';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order!: orderData;
  constructor() { }

  ngOnInit(): void {
  }

}
