import { Component, OnInit } from '@angular/core';
import { Ingredents } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
ingredients:Ingredents[]=[
new Ingredents("Apple",5),
new Ingredents("Tomatto",10)

];
  constructor() { }

  ngOnInit(): void {
  }

}
