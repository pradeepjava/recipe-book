import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data.storage.service';

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    collapsed = true;
    isAuthenticated = false;
    userSubscription: Subscription;
    constructor(private dataService: DataStorageService, private authService: AuthService, private route: Router) { }
    saveData() {
        this.dataService.storeData();

    }

    ngOnInit() {
        this.userSubscription = this.authService.userSubject.subscribe(user => {
            this.isAuthenticated = !!user;
        });

    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    fetchData() {
        this.dataService.fetchData().subscribe();
    }
    onLogout() {
        this.authService.doLogout();
     
    }
}