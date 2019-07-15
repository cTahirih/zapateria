import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() id: number;
  @Input() icon: string;
  @Input() titleA: string;
  @Input() titleB: string;
  @Input() mount: string;
  constructor() { }

  ngOnInit() {
  }

}
