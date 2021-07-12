import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { AuthResponseData, AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
    isLogginMode = true;
    isLoading = false;
    error = ''
    eventSubscription: Subscription;
    constructor(private authService: AuthService, private route: Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }
    
    ngOnDestroy(): void {
        if (this.eventSubscription) {
            this.eventSubscription.unsubscribe();
        }
    }

    @ViewChild('alertToDisplay', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

    switchMode() {
        this.isLogginMode = !this.isLogginMode;
    }
    closePopup() {
        this.error = '';
    }
    onSubmit(authForm: NgForm) {
        const email = authForm.value.email;
        const password = authForm.value.password;
        if (!authForm.valid) {
            return;
        }
        let signingObservable = new Observable<AuthResponseData>();
        this.isLoading = true;
        if (this.isLogginMode) {
            signingObservable = this.authService.signup_signIn(email, password, 'signin');
            this.error = '';
        }
        else {
            signingObservable = this.authService.signup_signIn(email, password, 'signup');
        }
        signingObservable.subscribe(data => {
            console.log(data)
            this.isLoading = false;
            this.route.navigate(['/recipes']);
        }, errorMsg => {
            this.error = errorMsg;
            this.showAlertProgrammatically(errorMsg);
            console.log(errorMsg)
            this.isLoading = false;
        }
        )
        authForm.reset();
    }

    showAlertProgrammatically(errorMsg: string) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
        this.viewContainerRef.clear();
        let componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.message = errorMsg;
        this.eventSubscription = componentRef.instance.closeEvent.subscribe(() => {
            this.eventSubscription.unsubscribe();
            this.viewContainerRef.clear();
        });

    }
}