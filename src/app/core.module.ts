import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptor } from "./auth/auth.interceptor.service";
import { RecipeService } from "./recpies/recipe.service";
import { ShopingListService } from "./shoping-list/shoping-list.service";

@NgModule({
    providers: [ShopingListService, RecipeService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class CoreModule {

}