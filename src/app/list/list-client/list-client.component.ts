import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ListClientService } from '../services/list-client.service';

import { ActivatedRoute } from '@angular/router';
import {catchError, tap} from 'rxjs/operators';

import { IClients } from '../interfaces/clients';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  @Output() errorEmitter = new EventEmitter<string>();
  errorMessage: string;
  listClients: IClients[];
  displayedColumns: string[] = ['position', 'name', 'lastnamefull', 'birthdate', 'email'];
  paginator: any;
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
          catchError(err => {
            this.errorMessage = err.message;
            console.log(err);
            this.errorEmitter.emit(this.errorMessage);
            return err;
          })
        ).subscribe(response => {
          this.listClients = response.content as IClients[];
          this.paginator = response;
          this.pages = new Array(response.totalPages).fill(1).map((value, index) => index + 1);
      });
    });
  }

}
