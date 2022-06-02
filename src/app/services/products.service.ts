import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderData } from '../Models/order-data';
import { productData } from '../Models/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private listOfProducts : productData[] = [];
  cartItems : orderData[] = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    // http call to retrieve list of products
    return this.http.get('./assets/product-data.json') as Observable<any>;
    
  };

  getOrderData() {
   
   return this.http.get('/assets/order-data.json');
 
  }

  addToCard(data: any){
    return this.cartItems.push(data);
  }

  clearCart() {
    this.cartItems = [];
  }
}
