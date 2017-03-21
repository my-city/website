import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
})
export class MapComponent {

    lat: number = 49.351889;
    lng: number = -122.859846;
    zm: number = 12;

    OnInit(): void {

    }
}
