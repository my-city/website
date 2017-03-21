import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'map-component',
    templateUrl: './map.component.html',
})
export class MapComponent {

    lat: number = 51.678418;
    lng: number = 7.809007;

    OnInit(): void {

    }
}
