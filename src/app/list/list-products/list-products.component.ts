import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListProductsService } from '../services/list-products.service';
import {tap} from 'rxjs/operators';

export interface IProduct {
  id: number;
  nombre: string;
  precio: number;
  sku: string;
  stock: number;
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  listProducts: IProduct[];
  displayedColumns: string[] = ['position', 'name', 'price', 'stock'];
  paginador: any;
  pages: number[];
  constructor(
    private listProductService: ListProductsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');
      if (!page) {
        page = 1;
      }
      this.listProductService.getListProducts(page)
        .pipe(
          tap((response: any) => {
            (response.content as IProduct[]).forEach(producto => {
              console.log(producto);
            });
          })
        ).subscribe(response => {
          this.listProducts = response.content as IProduct[];
          this.paginador = response;
          this.pages = new Array(response.totalPages).fill(1).map((value, index) => index + 1);
      });
    });
  }

}

