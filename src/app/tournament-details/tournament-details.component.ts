import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ClashRoyaleService } from '../clash-royale.service';
import { Tournament } from '../interfaces/tournament.interface';

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {
  tournament: Tournament | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ClashRoyaleService: ClashRoyaleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const tournamentTag = this.route.snapshot.paramMap.get('tournamentTag');
    if (tournamentTag) {
      const encodedTag = encodeURIComponent(tournamentTag);
      this.ClashRoyaleService.getTournamentByTag(encodedTag).subscribe(
        (tournament: Tournament) => {
          this.tournament = tournament;
        },
        (error: any) => {
          console.error('Error retrieving tournament details:', error);
        }
      );
    }
  }


  goBack(): void {
    this.location.back();
  }

  goToTournamentDetailsPage(): void {
    if (this.tournament && this.tournament.tag) {
      const tournamentTag = this.tournament.tag;
      this.router.navigateByUrl(`/v1/tournaments/${tournamentTag}`);
    }
  }
}

