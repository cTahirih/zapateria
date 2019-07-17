import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListProductsService } from '../services/list-products.service';
import {catchError, tap} from 'rxjs/operators';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @Output() errorEmitter = new EventEmitter<string>();
  errorMessage: string;
  listProducts: IProduct[];
  displayedColumns: string[] = ['position', 'name', 'price', 'stock'];
  paginator: any;
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
          }),
          catchError(err => {
            this.errorMessage = err.message;
            console.log(err);
            this.errorEmitter.emit(this.errorMessage);
            return err;
          })
        ).subscribe(response => {
          this.listProducts = response.content as IProduct[];
          this.paginator = response;
          this.pages = new Array(response.totalPages).fill(1).map((value, index) => index + 1);
      });
    });
  }

}

