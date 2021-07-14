import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShopingEditComponent } from "./shoping-edit/shoping-edit.component";
import { ShopingListComponent } from "./shoping-list.component";

@NgModule({
    declarations: [ShopingListComponent,
        ShopingEditComponent],
    imports: [FormsModule, RouterModule.forChild([
        { path: '', component: ShopingListComponent },
    ]),CommonModule,SharedModule]

})
export class ShoingListModule {

}