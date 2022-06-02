import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product-data';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  selectedProductList: Array<productData> = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
     this.productsService.getProducts().subscribe((res: any) =>
    {
      this.products = res;

    })

    this.productsService.addToCard(this.selectedProductList);
  }
  OnEventClickAddCard(data: any){
    this.selectedProductList.push(data);
    return this.selectedProductList;
  }
}
