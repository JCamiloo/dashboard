import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BasicGraph } from 'src/app/interfaces/interfaces';
const API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<BasicGraph[]>(`${API}/commerces/graph`);
  }
}
