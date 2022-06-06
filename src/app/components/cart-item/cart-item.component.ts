import { Component, Input, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product-data';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
@Input() cardItem!: productData;
  constructor() { }

  ngOnInit(): void {
  }

}
