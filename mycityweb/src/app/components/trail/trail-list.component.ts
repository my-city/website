import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrailsService } from '../../services/trails.service';
import { Trail } from '../../models/trail';

@Component({
    selector: 'trail-list',
    templateUrl: './trail-list.component.html',
})
export class TrailListComponent {
    public trails: Trail[] = [];

    constructor(private trailsService: TrailsService, private router: Router) { }  
    
    public gotoDetail(trail) {
        // todo: should use title to be displayed in the browser
        let link = ['/trail', trail.id];
        this.router.navigate(link);
    }

    ngOnInit(): void {
        this.trailsService.getTrails()
            .then(trails => this.trails = trails);
    }

}