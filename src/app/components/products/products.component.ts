import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product-data';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: productData[] = [];
  filteredItems: productData[]= [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
     this.productsService.getProducts().subscribe((res: any) =>
    {
      this.products = res;
      this.filteredItems = this.products
    })
  }

  OnClickAddCardHandler(data: productData){
    this.productsService.addToCard(data);
    console.log("Data Name INFO : " + data.name);
  }

  filterBySearch(text: string){
  
    if (text !== "") {
      this.filteredItems = this.products.filter(product => {
        const lowerCaseText = text.toLowerCase();
        const lowerCaseProductName = product.name.toLowerCase();
        return lowerCaseProductName.includes(lowerCaseText);
      })
    } else {
      this.filteredItems = this.products;
    }
    console.log("Entered Text INFO : "+ text)
  }
}
