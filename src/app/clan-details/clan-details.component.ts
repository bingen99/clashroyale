import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClashRoyaleService } from '../clash-royale.service';
import { Clan } from '../interfaces/ClanDetails.interface';

@Component({
  selector: 'app-clan-details',
  templateUrl: './clan-details.component.html',
  styleUrls: ['./clan-details.component.css']
})
export class ClanDetailsComponent implements OnInit {
  clanTag!: string;
  clanDetails!: Clan;

  constructor(private location: Location, private route: ActivatedRoute, private clanService: ClashRoyaleService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.clanTag = params.get('tag')!;
      this.getClanDetails();
    });
  }

  getClanDetails() {
    this.clanService.getClanDetails(this.clanTag)
      .subscribe(
        (clan: Clan) => {
          this.clanDetails = clan;
        },
        (error) => {
          console.log('Error retrieving clan details:', error);
        }
      );
  }

  goBack() {
    this.location.back();
  }

  goToClanMembersPage(): void {
    if (this.clanDetails && this.clanDetails.tag) {
      const clanTag = this.clanDetails.tag;
      const encodedTag = encodeURIComponent(clanTag).replace(/%25/g, '%');
      this.router.navigateByUrl(`/v1/clans/${encodedTag}/members`);
    }
  }




}







