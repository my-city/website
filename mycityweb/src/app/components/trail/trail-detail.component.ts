import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrailsService } from '../../services/trails.service';
import { Trail } from '../../models/trail';

@Component({
    selector: 'trail-detail',
    templateUrl: './trail-detail.component.html',
})
export class TrailDetailComponent {

    constructor(private trailsService: TrailsService, private router: Router) { }  

}