import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth.guard.service";
import { FetchDataResolver } from "../shared/edit.guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipes-start/recipes-start";
import { RecpieEditComponent } from "./recpie-edit/recpie-edit.component";
import { RecpiesComponent } from "./recpies.component";

const route: Routes = [
            {path: '', component: RecpiesComponent, canActivate: [AuthGuardService], children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecpieEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [FetchDataResolver] },
            { path: ':id/edit', component: RecpieEditComponent, resolve: [FetchDataResolver] }

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class RecipiesRoutingModule {

}