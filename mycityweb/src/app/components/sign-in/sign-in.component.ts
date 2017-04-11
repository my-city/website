import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
})
export class SignInComponent {

    user = {};
    constructor(private authService: AuthService) {  }

    login() {
        this.authService.login();
        this.user = this.authService.user;
    }

    logout() {
        this.authService.logout();
    }

}