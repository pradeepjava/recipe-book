import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "../recpies/recipe.model";
import { RecipeService } from "../recpies/recipe.service";
import { DataStorageService } from "./data.storage.service";

@Injectable({
    providedIn: 'root'
})
export class FetchDataResolver implements Resolve<Recipe[]> {
    constructor(private dataService: DataStorageService, private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const newLocal = this.recipeService.getRecipes();
        if (newLocal.length === 0) {
            return this.dataService.fetchData();
        }
        return newLocal;
    }


}