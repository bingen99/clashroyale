import { Component, OnInit } from '@angular/core';
import { ClanMember } from '../interfaces/ClanDetails.interface';
import { ClashRoyaleService } from '../clash-royale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clan-members',
  templateUrl: './clan-members.component.html',
  styleUrls: ['./clan-members.component.css']
})
export class ClanMembersComponent implements OnInit {
  clanMembers: ClanMember[] = [];
  pagedMembers: ClanMember[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number[] = [];


  constructor(
    private clashRoyaleService: ClashRoyaleService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getClanMembers();
  }

  getClanMembers(): void {
    this.route.paramMap.subscribe(params => {
      const clanTag = params.get('tag');
      if (clanTag) {
        this.clashRoyaleService.getClanMembers(clanTag).subscribe(
          (response: ClanMember[] | null) => {
            if (response && Array.isArray(response)) {
              this.clanMembers = response;
              this.updatePagedMembers();
            } else {
              console.error('El servicio getClanMembers no devolvió un array válido:', response);
            }
          },
          (error: any) => {
            console.error('Error al obtener los miembros del clan:', error);
          }
        );
      } else {
        console.error('No se encontró el parámetro "tag" en la URL.');
      }
    });
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updatePagedMembers();
  }

  updatePagedMembers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedMembers = this.clanMembers.slice(startIndex, endIndex);
    this.calculateTotalPages();
  }

  calculateTotalPages(): void {
    const pageCount = Math.ceil(this.clanMembers.length / this.itemsPerPage);
    this.totalPages = [];
    for (let page = 1; page <= pageCount; page++) {
      this.totalPages.push(page);
    }
  }

  goBack(): void {
    this.location.back();
  }

  formatLastSeen(lastSeen: string): string {
    const year = lastSeen.substr(0, 4);
    const month = lastSeen.substr(4, 2);
    const day = lastSeen.substr(6, 2);
    const hour = lastSeen.substr(9, 2);
    const minute = lastSeen.substr(11, 2);
    const second = lastSeen.substr(13, 2);

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  }


}













