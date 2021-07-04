import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipies: Recipe[] = [
    new Recipe("Test Recipe1", "this is a test recipe",
      "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/06/zucchini-butter-spaghetti-1-scaled.jpg?w=1920&ssl=1"),
    new Recipe("Test Recipe2", "this is second test recipe",
      "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2021/06/zucchini-butter-spaghetti-1-scaled.jpg?w=1920&ssl=1")
  ];

  constructor() { }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
  ngOnInit(): void {
  }

}
