import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponentComponent } from './card-list-component/card-list-component.component';
import { CardDetailComponentComponent } from './card-detail-component/card-detail-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';
import { ClanListComponentComponent } from './clan-list-component/clan-list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClanDetailsComponent } from './clan-details/clan-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClanMembersComponent } from './clan-members/clan-members.component';
import { TournamentDetailsComponent } from './tournament-details/tournament-details.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponentComponent,
    CardDetailComponentComponent,
    DetailComponentComponent,
    ClanListComponentComponent,
    ClanDetailsComponent,
    ClanMembersComponent,
    TournamentDetailsComponent,
    TournamentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
