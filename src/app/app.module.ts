import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecipeListComponent } from './recpies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recpies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recpies/recipe-list/recipe-item/recipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShopingListService } from './shoping-list/shoping-list.service';
import { AppRouterModule } from './app.router.module';
import { RecipeStartComponent } from './recpies/recipes-start/recipes-start';
import { RecpieEditComponent } from './recpies/recpie-edit/recpie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recpies/recipe.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthInterceptor } from './auth/auth.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecpiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecpieEditComponent,
    AuthComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShopingListService, RecipeService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
