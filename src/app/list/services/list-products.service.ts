import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { IProduct } from '../interfaces/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {
  errorMessage: string;
  private URL_PRODUCTS =  'https://pos-zapateria.herokuapp.com/api/productos';
  constructor(
    private HTTP: HttpClient,
    private router: Router
  ) {}

  getListProducts(page: number): Observable<any> {
    return this.HTTP.get(this.URL_PRODUCTS + '/pages/' + page).pipe(
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
      catchError(err => {
        if (err.error.status === 500) {
          this.router.navigate(['/not-found']);
        } else {
          this.errorMessage = err;
        }
        return throwError(this.errorMessage);
      })
    );
  }
}
