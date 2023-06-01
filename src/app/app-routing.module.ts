import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponentComponent } from './card-list-component/card-list-component.component';
import { CardDetailComponentComponent } from './card-detail-component/card-detail-component.component';
import { ClanListComponentComponent } from './clan-list-component/clan-list-component.component';
import { ClanDetailsComponent } from './clan-details/clan-details.component';
import { ClanMembersComponent } from './clan-members/clan-members.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/v1/cards', pathMatch: 'full' },
  { path: 'v1/cards', component: CardListComponentComponent },
  { path: 'v1/cards/:id', component: CardDetailComponentComponent },
  { path: 'v1/clans', component: ClanListComponentComponent },
  { path: 'v1/clans/:tag', component: ClanDetailsComponent },
  { path: 'v1/clans/:tag/members', component: ClanMembersComponent },
  { path: 'v1/tournaments', component: TournamentListComponent },
  { path: 'v1/tournaments/:tournamentTag', component: TournamentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

