import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrailsService } from '../../services/trails.service';
import { Trail } from '../../models/trail';
import { RatingComponent } from '../rating/rating.component';

@Component({
    selector: 'trail-list',
    templateUrl: './trail-list.component.html',
    //directives: [RatingComponent]
})
export class TrailListComponent {
    public trails: Trail[] = [];
    ratingClicked: number;
    itemIdRatingClicked: number;

    constructor(private trailsService: TrailsService, private router: Router) { }  

    

    ngOnInit(): void {
        
        this.trailsService.getTrails()
            .then(trails => this.trails = trails);
    }

    ratingComponetClick(clickObj: any): void {
        var item = this.trails.filter((item: any) => item.id === clickObj.id);
        if (!!item && item.length === 1) {
            item[0].rating = clickObj.rating;
            this.ratingClicked = clickObj.rating;
            this.itemIdRatingClicked = clickObj.id;
        }
    }

    newTrail(): void {
        let link = ['/trail/new'];
        this.router.navigate(link);
    }


}