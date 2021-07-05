import { EventEmitter, Injectable } from "@angular/core";
import { Ingredents } from "../shared/ingredient.model";
import { ShopingListService } from "../shoping-list/shoping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    constructor(private shopinglistService: ShopingListService) { }
    selectedRecepie = new EventEmitter<Recipe>();
    recipies: Recipe[] = [
        new Recipe("Super Meat", "test how it is?",
            "https://us.123rf.com/450wm/lsantilli/lsantilli1604/lsantilli160400046/56837587-raw-meat-mix-isolated-on-white.jpg?ver=6",
            [
                new Ingredents("Meat", 1),
                new Ingredents("Onion", 3)
            ]
        ),
        new Recipe("Super Burger", "really nice!",
            "https://media.istockphoto.com/photos/fresh-burger-isolated-picture-id1125149183?k=6&m=1125149183&s=612x612&w=0&h=KxSfVUk3KP3BgHVYboyL9aRLHp-fRYrfPcFea0w68Ow=",
            [
                new Ingredents("Bread", 2),
                new Ingredents("Tomato", 5)
            ]
        )
    ];

    getRecipes() {
        return this.recipies.slice();
    }

    addIngredents(ing: Ingredents[]) {
        this.shopinglistService.addIngredentsToShopingList(ing);
    }
}