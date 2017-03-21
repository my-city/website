import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
})
export class MapComponent {
    google: any;
    OnInit(): void {

        let options = {
            center: new this.google.maps.LatLng(53.83305, -1.66412),
            zoom: 3,
            MapTypeId: this.google.maps.MapTypeId.TERRAIN
        };
        let map = new this.google.maps.Map(document.getElementById("map"), options);

    }
}
