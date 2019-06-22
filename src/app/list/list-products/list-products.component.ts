import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../services/list-products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  listProducts: any;
  constructor(
    private _listProductService: ListProductsService
  ) { }

  ngOnInit() {
    this._listProductService.getListProducts()
    .then((products: any) => {
      console.log(products.content);
      this.listProducts = products.content;
    }).catch((error) => {
      console.log('Error:' + error);
    });
  }

  showConfig() {

  }
}
