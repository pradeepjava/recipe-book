import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recpies/recipe.model";
import { RecipeService } from "../recpies/recipe.service";
import { exhaustMap, map, take, tap } from 'rxjs/operators'
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService,
        private userAuthService: AuthService) { }

    storeData() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://recipe-book-project-2b155-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(data => {
        })
    }
    fetchData() {
        return this.http.get<Recipe[]>
            ('https://recipe-book-project-2b155-default-rtdb.firebaseio.com/recipes.json').pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredents: recipe.ingredents ? recipe.ingredents : []
                    }
                })
            }),
                tap(data => this.recipeService.setRecipes(data))
            )
    }
}