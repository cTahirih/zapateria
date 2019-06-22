import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {
  listUrl = 'https://pos-zapateria.herokuapp.com/api/productos/page/1';
  getConfig() {
    return this.http.get(this.listUrl);
  }
  constructor(private http: HttpClient) { }
}
