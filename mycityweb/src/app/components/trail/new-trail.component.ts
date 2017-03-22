import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { City } from '../../models/city';
import { Trail } from '../../models/trail';
import { CitiesService } from '../../services/cities.service';


@Component({
    selector: 'new-trail',
    templateUrl: './new-trail.component.html',
})
export class NewTrailComponent implements OnInit {

    regions = ["Tri-Cities", "Fraser Valley"];
    difficulties = ["Easy", "Moderate", "Hard"];
    trail: Trail;
    constructor(
        private citiesService: CitiesService,
        private route: ActivatedRoute,
        private location: Location,
        private titleService: Title
    )
    { 
        this.trail = new Trail();
        this.trail.name = "test";
    }

    ngOnInit(): void {
        this.titleService.setTitle("New Trail");

    }

    save(trail): void {
        alert(this.trail.name);
    }

}