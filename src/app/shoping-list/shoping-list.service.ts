import { Subject } from "rxjs";
import { Ingredents } from "../shared/ingredient.model";

export class ShopingListService {
    changedIngredents = new Subject<Ingredents[]>();
    itemIndexToBeEdited = new Subject<number>();
    ingredients: Ingredents[] = [
        new Ingredents("Apple", 5),
        new Ingredents("Tomatto", 10)
    ];

    getIngredents() {
        return this.ingredients.slice();
    }
    getIngredentsForEditByIndex(index: number) {
        return this.ingredients[index];
    }
    addIngredents(ingredents: Ingredents) {
        this.ingredients.push(ingredents);
        this.changedIngredents.next(this.ingredients.slice());
    }
    addIngredentsToShopingList(ing: Ingredents[]) {
        this.ingredients.push(...ing);
        this.changedIngredents.next(this.ingredients.slice());
    }
    updateIngredent(index: number, newIngredents: Ingredents) {
        this.ingredients[index] = newIngredents;
        this.changedIngredents.next(this.ingredients.slice());
    }
    deleteIngredent(index: number) {
        this.ingredients.splice(index, 1);
        this.changedIngredents.next(this.ingredients.slice());
    }
}