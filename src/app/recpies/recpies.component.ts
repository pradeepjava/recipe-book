import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers:[RecipeService]
})
export class RecpiesComponent implements OnInit {
  recipeEmited:Recipe;
  constructor() { }

  ngOnInit(): void {
   
  }

}
