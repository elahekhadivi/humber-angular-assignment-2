import { Component, Input, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title = '';
  @Output() searchedText : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  OnSearch(text: string){
console.log(text)
}
}
