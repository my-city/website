import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'instagram-feed',
    templateUrl: './instagram-feed.component.html'
})
export class InstagramFeedComponent implements OnInit {

    @Input() feed: any;

    constructor() { }

    ngOnInit() {

    }

}