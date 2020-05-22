import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Layer } from './../../../interfaces/interfaces';
const API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  fetchLayer() {
    return this.http.get<Layer>(`${API}/commerces/layer`);
  }
}
