import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.selectedRecipe = this.recipeService.getRecipeById(this.id);
    })
  }
  addIngredentsToList() {
    this.recipeService.addIngredents(this.selectedRecipe.ingredents);
  }
  onEditRecipe() {
    // this.route.navigate(['edit'],{relativeTo:this.activatedRoute});
    this.route.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute })
  }
}
