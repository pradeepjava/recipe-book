import { Ingredents } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;
    public ingredents: Ingredents[];
    constructor(name: string, desc: string, img: string, ing: Ingredents[]) {
        this.name = name;
        this.description = desc;
        this.imgPath = img;
        this.ingredents = ing;
    }
}