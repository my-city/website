import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrailsService } from '../../services/trails.service';
import { Trail } from '../../models/trail';
import { RatingComponent } from '../rating/rating.component';
import { InstagramFeedService } from '../../services/instagramfeed.service';

@Component({
    selector: 'trail-list',
    templateUrl: './trail-list.component.html',
    //directives: [RatingComponent]
})
export class TrailListComponent {
    public trails: Trail[] = [];
    public unFilteredTrails: Trail[] = [];
    ratingClicked: number;
    itemIdRatingClicked: number;
    defualtFilter: string;
    titleFilter: string;
    regionFilter:string

    constructor(private trailsService: TrailsService,
                private router: Router,
                private instagramFeedService: InstagramFeedService, ) {
        this.defualtFilter = "Region";
        this.regionFilter = "";
        this.titleFilter = "";
    }  

    

    ngOnInit(): void {
        let $self = this;
        this.trailsService.getTrails()
            .then(function (trails) {
                //$self.unFilteredTrails
                $self.trails = trails;
                $self.sortChange("Region");
                for (let trail of trails) {
                    $self.setThumbnailPicture(trail);
                }
            });
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

    setThumbnailPicture(trail: Trail): void {
        trail.thumbnail = '/assets/placeholder.png';
        var self = this;
        var imgSource;
        this.instagramFeedService.getPictures(trail.hashtags)
            .then(function (feeds) {
                imgSource = (new DOMParser().parseFromString(feeds[0].content, "text/html")).getElementsByTagName('img')[0].src;
                trail.thumbnail = imgSource;
             });
    }

    sortChange(value) {
        if(value == 'Name')
            this.trails.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });

        else if (value == 'RoundTrip')
            this.trails.sort(function (a, b) { return (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0); });

        else if (value == 'Time')
            this.trails.sort(function (a, b) { return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0); });

        else if (value == 'Difficulty')
            this.trails.sort(function (a, b) { return (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0); });

        else if (value == 'Region')
            this.trails.sort(function (a, b) { return (a.difficulty > b.difficulty) ? 1 : ((b.difficulty > a.difficulty) ? -1 : 0); });
    }

    titleFilterChange() {
        //alert(this.titleFilter + " " + this.regionFilter);
    }

    regionFilterChange() {
        //alert(this.titleFilter + " " + this.regionFilter);
    }

}