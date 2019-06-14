import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public data = [
    {
      iconClass: 'far fa-money-bill-alt',
      title: ['COMPRAS', 'TOTALES'],
      mount: '$0,00'
    },
    {
      iconClass: 'fas fa-shopping-cart',
      title: ['VENTAS', 'TOTALES'],
      mount: '$0,00'
    },
    {
      iconClass: 'fas fa-dollar-sign',
      title: ['COMPRA', 'ADEUDADA'],
      mount: '$0,00'
    },
    {
      iconClass: 'far fa-file-alt',
      title: ['FACTURA', 'A PAGAR'],
      mount: '$0,00'
    }
  ];
  constructor() {}

}
