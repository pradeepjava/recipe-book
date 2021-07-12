import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredents } from "../shared/ingredient.model";
import { ShopingListService } from "../shoping-list/shoping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    constructor(private shopinglistService: ShopingListService) { }
    subjectRecipe = new Subject<Recipe[]>();
    // recipies: Recipe[] = [
    //     new Recipe("Super Meat", "test how it is?",
    //         "https://us.123rf.com/450wm/lsantilli/lsantilli1604/lsantilli160400046/56837587-raw-meat-mix-isolated-on-white.jpg?ver=6",
    //         [
    //             new Ingredents("Meat", 1),
    //             new Ingredents("Onion", 3)
    //         ]
    //     ),
    //     new Recipe("Super Burger", "really nice!",
    //         "https://media.istockphoto.com/photos/fresh-burger-isolated-picture-id1125149183?k=6&m=1125149183&s=612x612&w=0&h=KxSfVUk3KP3BgHVYboyL9aRLHp-fRYrfPcFea0w68Ow=",
    //         [
    //             new Ingredents("Bread", 2),
    //             new Ingredents("Tomato", 5)
    //         ]
    //     )
    // ];
    recipies: Recipe[] = [];

    setRecipes(recipesArray: Recipe[]) {
        this.recipies = recipesArray;
        this.subjectRecipe.next(this.recipies.slice());
    }

    saveRecipe(recipe: Recipe) {
        this.recipies.push(recipe);
        this.subjectRecipe.next(this.recipies.slice());
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipies[index] = recipe;
        this.subjectRecipe.next(this.recipies.slice());
    }
    getRecipes() {
        return this.recipies.slice();
    }
    getRecipeById(id: number) {
        return this.recipies[id];
    }

    addIngredents(ing: Ingredents[]) {
        this.shopinglistService.addIngredentsToShopingList(ing);
    }
    deleteRecipe(index: number) {
        this.recipies.splice(index, 1);
        this.subjectRecipe.next(this.recipies.slice());
    }
}