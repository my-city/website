import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { InstagramFeed } from '../../models/instagramfeed';


@Component({
    selector: 'instagram-feed',
    templateUrl: './instagram-feed.component.html'
})
export class InstagramFeedComponent implements OnInit {

    selectedOption: string;
    @Input() feed: InstagramFeed;

    constructor(public dialog: MdDialog) { }

    ngOnInit() {

    }

    showPicture(feed)
    {
        let dialogRef = this.dialog.open(InstagramFeedDialog);
        dialogRef.componentInstance.feed = feed;
    }

}

@Component({
    selector: 'instagram-feed-dialog',
    templateUrl: './instagram-feed-dialog.html',
})
export class InstagramFeedDialog {

    public feed: InstagramFeed;
    constructor() { }
}