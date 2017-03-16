import { Component } from '@angular/core';
import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/city';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

    user = {};

    constructor(public af: AngularFire) {

        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
            }
            else {
                // user not logged in
                this.user = {};
            }
        });
    }

    login() {
        this.af.auth.login({
            provider: AuthProviders.Google
        });
    }

    logout() {
        this.af.auth.logout();
    }


}