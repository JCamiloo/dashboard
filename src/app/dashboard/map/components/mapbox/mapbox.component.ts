import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  map: Mapboxgl.Map;

  constructor() { }

  ngOnInit() {
    this.renderMap();
  }

  renderMap() {
    Mapboxgl.accessToken = environment.mapbox_key;
    this.map = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });
  }
}
