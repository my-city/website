﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitiesService } from '../../services/cities.service';
import { City } from '../../models/city';

@Component({
    selector: 'city-list',
    templateUrl: './city-list.component.html',
})
export class CityListComponent {
    public cities: City[] = [];

    constructor(private citiesService: CitiesService, private router: Router) { }  
    
    ngOnInit(): void {
        this.citiesService.getCities()
            .then(cities => this.cities = cities);
    }

}