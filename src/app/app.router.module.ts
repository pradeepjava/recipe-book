import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuardService } from "./auth/auth.guard.service";
import { RecipeDetailComponent } from "./recpies/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recpies/recipes-start/recipes-start";
import { RecpieEditComponent } from "./recpies/recpie-edit/recpie-edit.component";
import { RecpiesComponent } from "./recpies/recpies.component";
import { FetchDataResolver } from "./shared/edit.guard.service";
import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const route: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecpiesComponent,canActivate:[AuthGuardService], children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecpieEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [FetchDataResolver] },
            { path: ':id/edit', component: RecpieEditComponent, resolve: [FetchDataResolver] }

        ]
    },
    { path: 'shoping-list', component: ShopingListComponent },
    { path: 'auth', component: AuthComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRouterModule {

}