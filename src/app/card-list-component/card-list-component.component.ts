import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';
import { ClashRoyaleService } from '../clash-royale.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-card-list-component',
  templateUrl: './card-list-component.component.html',
  styleUrls: ['./card-list-component.component.css']
})
export class CardListComponentComponent implements OnInit {

  commonCards$!: Observable<Card[]>;
  specialCards$!: Observable<Card[]>;
  epicCards$!: Observable<Card[]>;
  legendaryCards$!: Observable<Card[]>;

  constructor(private clashRoyaleService: ClashRoyaleService) { }

  ngOnInit(): void {
    this.commonCards$ = this.clashRoyaleService.getAllCards()
      .pipe(map((cards: any[]) => cards.filter((card: { maxLevel: number; }) => card.maxLevel === 14)));

    this.specialCards$ = this.clashRoyaleService.getAllCards()
      .pipe(map((cards: any[]) => cards.filter((card: { maxLevel: number; }) => card.maxLevel === 12)));

    this.epicCards$ = this.clashRoyaleService.getAllCards()
      .pipe(map((cards: any[]) => cards.filter((card: { maxLevel: number; }) => card.maxLevel === 9)));

    this.legendaryCards$ = this.clashRoyaleService.getAllCards()
      .pipe(map((cards: any[]) => cards.filter((card: { maxLevel: number; }) => card.maxLevel === 6)));
  }

}

