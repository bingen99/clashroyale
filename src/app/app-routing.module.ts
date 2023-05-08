import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponentComponent } from './card-list-component/card-list-component.component';
import { CardDetailComponentComponent } from './card-detail-component/card-detail-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/v1/cards', pathMatch: 'full' },
  { path: 'v1/cards', component: CardListComponentComponent },
  { path: 'v1/cards/:id', component: CardDetailComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

