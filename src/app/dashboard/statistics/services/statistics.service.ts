import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BasicGraph, Commerce } from '../models/statistics.model';
const API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  fetchGraphData() {
    return this.http.get<BasicGraph[]>(`${API}/commerces/graph`);
  }

  fetchDatatableData() {
    return this.http.get<Commerce[]>(`${API}/commerces`);
  }
}
