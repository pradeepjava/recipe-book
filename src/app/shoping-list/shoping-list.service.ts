import { Subject } from "rxjs";
import { Ingredents } from "../shared/ingredient.model";

export class ShopingListService {
    changedIngredents = new Subject<Ingredents[]>();
    ingredients: Ingredents[] = [
        new Ingredents("Apple", 5),
        new Ingredents("Tomatto", 10)
    ];

    getIngredents() {
        return this.ingredients.slice();
    }
    addIngredents(ingredents: Ingredents) {
        this.ingredients.push(ingredents);
        this.changedIngredents.next(this.ingredients.slice());
    }
    addIngredentsToShopingList(ing: Ingredents[]) {
        this.ingredients.push(...ing);
        this.changedIngredents.next(this.ingredients.slice());
    }
}