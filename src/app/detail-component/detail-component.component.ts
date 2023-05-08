import { Component, Input } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent {
  @Input() card: Card;

  constructor() {
    this.card = {} as Card;
  }

}
