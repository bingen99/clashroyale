import { Component, OnInit } from '@angular/core';
import { ClashRoyaleService } from '../clash-royale.service';
import { Tournament } from '../interfaces/tournament.interface';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {
  tournaments: Tournament[] = [];
  filteredTournaments: Tournament[] = [];
  searchQuery: string = '';

  currentPage = 1;
  itemsPerPage = 10;
  pagedTournaments: Tournament[] = [];
  totalPages: number[] = [];

  constructor(private clashRoyaleService: ClashRoyaleService) { }

  ngOnInit(): void {
    this.onSearchTournaments();
  }

  onSearch(): void {
    this.filterTournaments();
  }

  filterTournaments(): void {
    this.filteredTournaments = this.tournaments.filter(tournament =>
      tournament.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  onSearchTournaments(): void {
    if (this.searchQuery && this.searchQuery.length >= 3) {
      this.clashRoyaleService.getAllTournaments(this.searchQuery)
        .subscribe(
          (tournamentApiResponse: any) => {
            this.tournaments = tournamentApiResponse.items;
            this.filterTournaments();
          },
          (error: any) => {
            console.error('Error searching tournaments:', error);
          }
        );
    } else {
      this.tournaments = [];
      this.filteredTournaments = [];
    }
  }


}

