import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClashRoyaleService } from '../clash-royale.service';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card-detail-component',
  templateUrl: './card-detail-component.component.html',
  styleUrls: ['./card-detail-component.component.css']
})
export class CardDetailComponentComponent implements OnInit {
  card: Card | undefined;

  constructor(
    private route: ActivatedRoute,
    private clashRoyaleService: ClashRoyaleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cardId = +params['id']; // Obtener el ID de la carta desde los parámetros de la ruta y convertirlo a número
      this.getCardDetails(cardId);
    });
  }

  getCardDetails(cardId: number): void {
    this.clashRoyaleService.getAllCards().subscribe(
      (cards: Card[]) => {
        this.card = cards.find(card => card.id === cardId);
      },
      (error: any) => {
        console.error('Error fetching cards:', error);
      }
    );
  }
}











