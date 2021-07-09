import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recpie-edit',
  templateUrl: './recpie-edit.component.html',
  styleUrls: ['./recpie-edit.component.css']
})
export class RecpieEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService
    , private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null ? true : false;
      this.initiateForm();
    })
  }
  onCancel() {
    this.route.navigate(['../'], { relativeTo: this.activatedRoute });
  }
  onDeleteIngredent(index: number) {
    (<FormArray>this.recipeForm.get('ingredents')).removeAt(index);
  }
  saveRecipe() {
    let name = this.recipeForm.get('name').value;
    let descriptino = this.recipeForm.get('description').value
    let imgPath = this.recipeForm.get('imgUrl').value
    let ingredents = this.recipeForm.get('ingredents').value
    let recipe = new Recipe(name, descriptino, imgPath, ingredents);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    }
    else {
      this.recipeService.saveRecipe(recipe);
    }
    this.onCancel();
  }
  getControls() {
    return (<FormArray>this.recipeForm.get('ingredents')).controls;
  }

  onAddIngredent() {
    (<FormArray>this.recipeForm.get('ingredents')).push(
      new FormGroup(
        {
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/)
          ])
        }
      ))
  }

  private initiateForm() {
    let name = ''
    let imgUrl = '';
    let description = '';
    let ingredentsFormArray = new FormArray([]);
    if (this.editMode) {
      let recipe = this.recipeService.getRecipeById(this.id);
      name = recipe.name;
      imgUrl = recipe.imgPath;
      description = recipe.description;
      if (recipe['ingredents']) {
        for (let ing of recipe.ingredents) {
          ingredentsFormArray.push(
            new FormGroup(
              {
                'name': new FormControl(ing.name, Validators.required),
                'amount': new FormControl(ing.amount, [Validators.required,
                Validators.pattern(/^[1-9][0-9]*$/)
                ])
              }
            )
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imgUrl': new FormControl(imgUrl, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredents': ingredentsFormArray
    })
  }
}
