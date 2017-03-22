import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { City } from '../../models/city';
import { CitiesService } from '../../services/cities.service';


@Component({
    selector: 'new-trail',
    templateUrl: './new-trail.component.html',
})
export class NewTrailComponent implements OnInit {

    regions = ["Tri-Cities", "Fraser Valley"];
    difficulties = ["Easy", "Moderate", "Hard"];

    constructor(
        private citiesService: CitiesService,
        private route: ActivatedRoute,
        private location: Location,
        private titleService: Title
    )
    { }

    ngOnInit(): void {

        this.titleService.setTitle("New Trail");

    }

}