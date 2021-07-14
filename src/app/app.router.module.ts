import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { ShopingListComponent } from "./shoping-list/shoping-list.component";

const route: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shoping-list', component: ShopingListComponent },
    {path:'recipes', loadChildren:()=>import('./recpies/recpies.module').then(m=>m.RecipiesModule)},
    {path:'shoping-list',loadChildren:()=>import('./shoping-list/shoping-list-module').then(m=>m.ShoingListModule)},
    {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];
@NgModule({
    imports: [RouterModule.forRoot(route, {preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRouterModule {

}