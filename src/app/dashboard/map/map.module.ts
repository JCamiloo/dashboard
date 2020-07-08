import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { MapboxComponent } from './components/mapbox/mapbox.component';

const routes: Routes = [
  { path: '', component: MapboxComponent }
];

@NgModule({
  declarations: [
    MapboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('map', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class MapModule { }
