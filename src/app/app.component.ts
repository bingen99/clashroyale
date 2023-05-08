import { Component } from '@angular/core';
import { ClashRoyaleService } from './clash-royale.service';
import { Card } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recuperacion';



  constructor(private clashRoyaleService: ClashRoyaleService) { }


}


