import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipies:Recipe[]=[
  new Recipe("Test Recipe","this is a test recipe",
  "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/06/zucchini-butter-spaghetti-1-scaled.jpg?w=1920&ssl=1"),
  new Recipe("Test Recipe","this is a test recipe",
  "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/06/zucchini-butter-spaghetti-1-scaled.jpg?w=1920&ssl=1")
];

  constructor() { }

  ngOnInit(): void {
  }

}
