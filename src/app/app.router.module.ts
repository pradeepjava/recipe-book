import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recpies/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recpies/recipes-start/recipes-start";
import { RecpieEditComponent } from "./recpies/recpie-edit/recpie-edit.component";
import { RecpiesComponent } from "./recpies/recpies.component";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const route: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecpiesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecpieEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecpieEditComponent }

        ]
    },
    { path: 'shoping-list', component: ShopingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRouterModule {

}