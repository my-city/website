import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { TrailsService } from '../../services/trails.service';
import { Trail } from '../../models/trail';
import { Title } from '@angular/platform-browser';
import { InstagramFeedService } from '../../services/instagramfeed.service';


@Component({
    selector: 'trail-detail',
    templateUrl: './trail-detail.component.html',
})
export class TrailDetailComponent {

    public trail: Trail;
    private feedUrl: string = 'buntzenlake';
    private feeds: any;

    constructor(
        private trailsService: TrailsService,
        private route: ActivatedRoute,
        private location: Location,
        private instagramFeedService: InstagramFeedService,
        private titleService: Title) {
    
    }  

    ngOnInit(): void {

        this.titleService.setTitle(this.route.snapshot.params['title']);

        this.route.params
            .switchMap((params: Params) => this.trailsService.getTrail(params['id']))
            .subscribe(trail => this.trail = trail);

        this.showPictures();
    }

    private showPictures() {
        var self = this;
        this.instagramFeedService.getPictures("bunztenlake")
            .then(function (feeds) {
                self.feeds = feeds;
                for (let feed of self.feeds) {
                    //let doc = new DOMParser().parseFromString(feed);

                }


            });
    }

}