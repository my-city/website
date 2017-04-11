import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {

    user = {};
    isLoggedIn: boolean = false;
    constructor (public af: AngularFire) {

        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
                this.isLoggedIn = true;
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
        this.isLoggedIn = false;
        this.user = null;
    }


}