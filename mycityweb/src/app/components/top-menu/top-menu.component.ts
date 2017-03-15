import { Component } from '@angular/core';


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
}