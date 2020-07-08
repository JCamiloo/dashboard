import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit, OnDestroy {

  map: Mapboxgl.Map;
  layer: any = {};
  susbcriptions: Subscription[] = [];

  constructor(private toast: ToastrService, private store: Store<fromStore.MapState>) { }

  ngOnInit() {
    // Solo se ejecutará ejecuta el dispatch cuando no hayan datos cargados.
    this.susbcriptions.push(
      this.store.select(fromStore.getMapLoaded).subscribe(loaded => {
        !loaded && this.store.dispatch(new fromStore.LoadLayer())
      })
    );
    
    this.renderMap();
  }

  // Inicialización de mapa, cuando termina de cargar se piden los datos.
  renderMap() {
    this.map = new Mapboxgl.Map({
      accessToken: environment.mapbox_key,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.1646952,4.6487468],
      zoom: 10
    });

    this.map.on('load', () => this.fetchLayer());
  }

  // Petición de datos, validación cuando un comercio no tiene nombre y carga de datos al mapa.
  fetchLayer() {
    this.susbcriptions.push(
      this.store.select(fromStore.getMapLayer).subscribe(data => {
        if (data !== null) {
          data.features.forEach(feature => !feature.properties.name && (feature.properties.name = 'Otro comercio'));
          this.layer = data;
          this.addLayer();
        } else {
          this.toast.error('Intente más tarde');
        }
      })
    );
  }

  // Se añade una capa de circulos y otra de nombres en cada ubicación.
  addLayer() {
    this.map.addSource('points', {
      type: 'geojson',
      data: this.layer
    });

    this.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'text-field': ['get', 'name'],
        'text-font': ['Open Sans Semibold'],   
        'text-offset': [0, 1],
        'text-size': 12     
      }
    });

    this.map.addLayer({
      'id': 'circles',
      'type': 'circle',
      'source': 'points',
      'layout': {
        'visibility': 'visible'
      },
      'paint': {
        'circle-radius': 8,
        'circle-color': '#B32B30'
      }
    });
  }

  ngOnDestroy() {
    this.susbcriptions.forEach(subscription => subscription.unsubscribe());
  }
}
