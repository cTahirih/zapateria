import { Component, OnInit } from '@angular/core';
import { ListClientService } from '../services/list-client.service';

import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
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

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  listClients: IClients[];
  displayedColumns: string[] = ['position', 'name', 'lastnamefull', 'birthdate', 'email'];
  paginador: any;
  pages: number[];
  constructor(
    private listClientService: ListClientService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 1;
      }
      this.listClientService.getListClients(page)
        .pipe(
          tap((response: any) => {
            (response.content as IClients[]).forEach(client => {
              console.log(client);
            });
          })
        ).subscribe(response => {
          this.listClients = response.content as IClients[];
          this.paginador = response;
          this.pages = new Array(response.totalPages).fill(1).map((value, index) => index + 1);
      });
    });
  }

}
