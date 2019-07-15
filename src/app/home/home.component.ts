import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public data = [
    {
      id: 1,
      iconClass: 'far fa-money-bill-alt',
      title: ['COMPRAS', 'TOTALES'],
      mount: '$100,00'
    },
    {
      id: 2,
      iconClass: 'fas fa-shopping-cart',
      title: ['VENTAS', 'TOTALES'],
      mount: '$20,00'
    },
    {
      id: 3,
      iconClass: 'fas fa-dollar-sign',
      title: ['COMPRA', 'ADEUDADA'],
      mount: '$12,00'
    },
    {
      id: 4,
      iconClass: 'far fa-file-alt',
      title: ['FACTURA', 'A PAGAR'],
      mount: '$34,00'
    }
  ];
  constructor() {}

}
