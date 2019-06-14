import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
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
}
