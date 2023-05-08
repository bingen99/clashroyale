import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponentComponent } from './card-list-component/card-list-component.component';
import { CardDetailComponentComponent } from './card-detail-component/card-detail-component.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponentComponent,
    CardDetailComponentComponent,
    DetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
