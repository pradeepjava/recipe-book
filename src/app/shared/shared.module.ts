import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropDownDirective } from "./dropdown.directive";
import { SpinnerComponent } from "./spinner.component";

@NgModule({
    declarations: [AlertComponent,
        DropDownDirective,
        SpinnerComponent
    ],
    imports: [CommonModule],
    exports: [
        AlertComponent,
        DropDownDirective,
        SpinnerComponent,
        CommonModule
    ]
})
export class SharedModule {

}