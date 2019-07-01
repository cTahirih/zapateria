import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
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
  private URL_CLIENTS =  'https://pos-zapateria.herokuapp.com/api/clientes';
  constructor(
    private HTTP: HttpClient
  ) {}

  getListClients(page: number): Observable<any> {
    return this.HTTP.get(this.URL_CLIENTS + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as IClients[]).forEach(client => {
          console.log(client);
        });
      }),
      map((response: any) => {
        (response.content as IClients[]).map(client => {
          return client;
        });
        return response;
      }),
      tap((response: any) => {
        (response.content as IClients[]).forEach(client => {
          console.log(client);
        });
      })
    );
  }
}
