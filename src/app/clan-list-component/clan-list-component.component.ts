import { Component, OnInit } from '@angular/core';
import { ClashRoyaleService } from '../clash-royale.service';
import { Clan } from '../interfaces/ClanDetails.interface';

@Component({
  selector: 'app-clan-list-component',
  templateUrl: './clan-list-component.component.html',
  styleUrls: ['./clan-list-component.component.css']
})
export class ClanListComponentComponent implements OnInit {
  clans: Clan[] = [];
  filteredClans: Clan[] = [];
  searchTerm: string = '';

  currentPage = 1;
  itemsPerPage = 10;
  pagedClans: Clan[] = [];
  totalPages: number[] = [];

  constructor(private clashRoyaleService: ClashRoyaleService) { }

  ngOnInit(): void {
    this.onSearchClan();
  }

  onSearch() {
    this.filterClans();
    this.updatePagedClans();
  }

  filterClans() {
    this.filteredClans = this.clans.filter(clan =>
      clan.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.calculateTotalPages();
  }

  onSearchClan() {
    if (this.searchTerm && this.searchTerm.length >= 3) {
      this.clashRoyaleService.getAllClansByName(this.searchTerm)
        .subscribe((clanApiResponse: any) => {
          this.clans = clanApiResponse.items;
          this.filterClans();
          this.updatePagedClans();
        });
    }
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedClans();
  }

  updatePagedClans(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedClans = this.filteredClans.slice(startIndex, endIndex);
  }

  calculateTotalPages(): void {
    const pageCount = Math.ceil(this.filteredClans.length / this.itemsPerPage);
    this.totalPages = [];



    for (let page = 1; page <= pageCount; page++) {
      this.totalPages.push(page);
    }


  }





}






