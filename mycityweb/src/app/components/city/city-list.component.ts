import { Component } from '@angular/core';


@Component({
    selector: 'city-list',
    templateUrl: './city-list.component.html',
})
export class CityListComponent {
    tiles = [
        { country: "Canada", state: "British Columbia", title: 'Greater Vancouver Area', description: '', image: 'vancouver.jpg', cols: 1, rows: 1 },
        { country: "Canada", state: "Ontario", title: 'Greater Toronto Area', description: '', image: 'toronto.jpg', cols: 1, rows: 1 },
        { country: "Canada", state: "Alberta", title: 'Greater Calgary Area', description: '', image: 'calgary.jpg', cols: 1, rows: 1 },
        { country: "Canada", state: "Quebec", title: 'Greater Montreal Area', description: '', image: 'montreal.jpg', cols: 1, rows: 1 },
    ];
}