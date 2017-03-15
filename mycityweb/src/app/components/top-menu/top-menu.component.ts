import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'top-menu',
    templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
    menus = [
        { text: "Trails" },
        { text: "Parks" },
        { text: "Beaches" },
        { text: "Ski Resorts" }
    ];

    constructor(private router: Router) { }  

    public gotoDetail(menu) {
        // todo: should use title to be displayed in the browser
        let link = ['/stuff', menu.text];
        this.router.navigate(link);
    }
}