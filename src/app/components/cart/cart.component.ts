import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product-data';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 cardProducts: productData[] =[]
  constructor(private productsService: ProductsService) { }
  
  ngOnInit(): void {
    
    this.cardProducts = this.productsService.cartItems
  }
  onClearCart(){
    this.cardProducts=[];
    this.productsService.clearCart();
  }

}
