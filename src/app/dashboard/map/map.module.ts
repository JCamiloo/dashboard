import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
