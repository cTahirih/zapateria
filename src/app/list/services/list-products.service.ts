import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
export interface IProduct {
  id: number;
  nombre: string;
  precio: number;
  sku: string;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {
  private URL_PRODUCTS =  'https://pos-zapateria.herokuapp.com/api/productos';
  constructor(
    private HTTP: HttpClient
  ) {
    console.log('setvicio de productos');
  }

  getListProducts(page: number): Observable<any> {
    return this.HTTP.get(this.URL_PRODUCTS + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as IProduct[]).forEach(product => {
          console.log(product);
        });
      }),
      map((response: any) => {
        (response.content as IProduct[]).map(product => {
          return product;
        });
        return response;
      }),
      tap((response: any) => {
        (response.content as IProduct[]).forEach(producto => {
          console.log(producto);
        });
      })
    );
  }
}
