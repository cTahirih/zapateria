import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
export interface IClients {
  dateRegister: string;
  photo: string;
  id: number;
  name: string;
  father_lastName: string;
  mother_lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListClientService {
  errorMessage: string;
  private URL_CLIENTS =  'https://pos-zapateria.herokuapp.com/api/clientes';
  private PROXY = 'https://cors-anywhere.herokuapp.com/';
  constructor(
    private HTTP: HttpClient,
    private router: Router
  ) {}

  getListClients(page: number): Observable<any> {
    return this.HTTP.get(this.PROXY + this.URL_CLIENTS + '/page/' + page).pipe(
      map((response: any) => {
        (response.content as IClients[]).map(client => {
          return client;
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
