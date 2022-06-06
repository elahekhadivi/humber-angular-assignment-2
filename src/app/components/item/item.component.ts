import { Component,EventEmitter,  Input,Output, OnInit } from '@angular/core';
import { productData } from 'src/app/Models/product-data';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!: productData;
@Output() OnClickAddCard : EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {

  }
  OnclickFunc(){
    //console.log(this.item.name );
    this.OnClickAddCard.emit(this.item);
  }

}
