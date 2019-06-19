import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(
    private _http: HttpClient
  ) {
    console.log('setvicio de productos');
  }

  getListProducts() {
    return this._http.get('https://pos-zapateria.herokuapp.com/api/productos/page/1').toPromise();
  }
}
