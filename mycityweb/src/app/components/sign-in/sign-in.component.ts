import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { AngularFire, AuthProviders } from 'angularfire2';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {

    user = {};

    constructor (
        public af: AngularFire,
        private usersService: UsersService) {

        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
                usersService.saveUser(user);

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