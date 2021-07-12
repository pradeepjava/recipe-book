import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { User } from "./user.model";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLogginMode = true;
    isLoading = false;
    error = ''
    constructor(private authService: AuthService, private route: Router) { }
    switchMode() {
        this.isLogginMode = !this.isLogginMode;
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
            console.log(errorMsg)
            this.isLoading = false;
        }
        )
        authForm.reset();
    }
  
}