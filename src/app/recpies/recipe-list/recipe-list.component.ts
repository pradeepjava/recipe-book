import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];
  constructor(private recipeService: RecipeService, private route: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.recipies = this.recipeService.getRecipes();
    this.recipeService.subjectRecipe.subscribe(recipes=>{
      this.recipies=recipes;
    })
   
  }
  onNewRecipe() {
    this.route.navigate(['new'], { relativeTo: this.activatedRoute });
  }
}
