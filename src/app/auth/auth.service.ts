import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import {environment} from '../../environments/environment';

export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenExpirationTimer: any;
  userSubject = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private route: Router) { }

  autoLogin() {
    let userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    let userDataModel: User = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    if (userDataModel.token) {
      this.userSubject.next(userDataModel);
      this.autoLogout(userDataModel._tokenExpirationDate.getTime()-new Date().getTime())
    }
  }

  doLogout() {
    this.userSubject.next(null);
    this.route.navigate(['/auth'])
    localStorage.removeItem('userData')
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.doLogout();
    }, expirationDration)
  }
  signup_signIn(email: string, password: string, signType: string) {
    const finalUrl = getFinalUrl(signType);
    return this.http.post<AuthResponseData>(finalUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(
        getConvertedError
      ), tap(response => {
        let email = response.email;
        let id = response.localId;
        let token = response.idToken;
        let expiresIn = new Date(new Date().getTime() + (+response.expiresIn * 1000))
        const newUser = new User(email, id, token, expiresIn);
        this.userSubject.next(newUser)
        localStorage.setItem('userData', JSON.stringify(newUser));
        this.autoLogout(+response.expiresIn * 1000);
      })
      );
  }
}
function getConvertedError(error: any) {
  let errorMsg = "An Unknown Error Occured!";
  if (!error.error || !error.error.error) {
    return throwError(errorMsg);
  }
  switch (error.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMsg = 'Email Already Exists!'
      break;
    case 'EMAIL_NOT_FOUND':
    case 'INVALID_PASSWORD':
      errorMsg = 'Email/Password Invalid!'
  }
  return throwError(errorMsg);
}

function getFinalUrl(signType: string) {
  if (signType === 'signup') {
    return `${environment.SIGNUP_URL}` + environment.API_KEY;
  }
  return `${environment.SIGNIN_URL}` + environment.API_KEY
}

