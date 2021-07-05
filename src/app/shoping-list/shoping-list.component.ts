import { Component, OnInit } from '@angular/core';
import { Ingredents } from '../shared/ingredient.model';
import { ShopingListService } from './shoping-list.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredents[] = [];

  constructor(private shopinglistService: ShopingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shopinglistService.getIngredents();
    this.shopinglistService.changedIngredents.subscribe((ing: Ingredents[]) => {
      this.ingredients = ing;
    })
  }

}
