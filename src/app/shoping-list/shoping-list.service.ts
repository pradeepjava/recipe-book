import { EventEmitter } from "@angular/core";
import { Ingredents } from "../shared/ingredient.model";

export class ShopingListService {
    changedIngredents = new EventEmitter<Ingredents[]>();
    ingredients: Ingredents[] = [
        new Ingredents("Apple", 5),
        new Ingredents("Tomatto", 10)
    ];

    getIngredents() {
        return this.ingredients.slice();
    }
    addIngredents(ingredents: Ingredents) {
        this.ingredients.push(ingredents);
        this.changedIngredents.emit(this.ingredients.slice());
    }
    addIngredentsToShopingList(ing: Ingredents[]) {
        this.ingredients.push(...ing);
        this.changedIngredents.emit(this.ingredients.slice());
    }
}