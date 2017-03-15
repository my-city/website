import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/city';

@Component({
    selector: 'trail-list',
    templateUrl: './trail-list.component.html',
})
export class TrailListComponent {
    public cities: City[] = [];

    constructor(private citiesService: CitiesService, private router: Router) { }  
    
    public gotoDetail(trail) {
        // todo: should use title to be displayed in the browser
        let link = ['/trail', trail.id];
        this.router.navigate(link);
    }

    ngOnInit(): void {
        this.citiesService.getCities()
            .then(cities => this.cities = cities);
    }

}