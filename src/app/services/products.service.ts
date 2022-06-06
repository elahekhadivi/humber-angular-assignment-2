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
  cartItems : productData[]=[]
  //orderData[] = [];

  constructor(private http: HttpClient) { }

  getProducts() {
    // http call to retrieve list of products
    return this.http.get('./assets/product-data.json') as Observable<any>;
    
  };

  getOrderData() {
   
   return this.http.get('/assets/order-data.json');
 
  }

  addToCard(item: productData){
     this.cartItems.push(item);
     console.log("item.name " + item.name);
    
  }
  getCardItems(){
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }


  onSearch() {
    // http call to retrieve list of products
    return this.http.get('./assets/product-data.json') as Observable<any>;
    
  }
}
