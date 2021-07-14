import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRouterModule } from "../app.router.module";
import { SharedModule } from "../shared/shared.module";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipes-start/recipes-start";
import { RecpieEditComponent } from "./recpie-edit/recpie-edit.component";
import { RecpiesComponent } from "./recpies.component";
import { RecipiesRoutingModule } from "./recpies.routing.module";

@NgModule({
    declarations: [
        RecpiesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecpieEditComponent

    ],
    imports: [ReactiveFormsModule, RecipiesRoutingModule, SharedModule]
    // exports: [RecpiesComponent,
    //     RecipeListComponent,
    //     RecipeDetailComponent,
    //     RecipeItemComponent,
    //     RecipeStartComponent,
    //     RecpieEditComponent,
    // ]
    //the above commented code should use if we use these components in other module. Since it is used in recipes module overall. We have commented it.
})
export class RecipiesModule {

}