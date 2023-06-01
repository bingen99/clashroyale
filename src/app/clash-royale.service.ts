import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from './interfaces/api-response.interface';
import { Card } from './interfaces/card.interface';
import { Clan } from './interfaces/ClanDetails.interface';
import { ClanMember } from './interfaces/ClanDetails.interface';
import { Tournament } from './interfaces/tournament.interface';

@Injectable({
  providedIn: 'root'
})
export class ClashRoyaleService {
  private apiBaseUrl = "http://localhost:4200/v1/cards";
  private ClanUrl = "http://localhost:4200/v1/clans";
  private tournamentUrl = "http://localhost:4200/v1/tournaments";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD, OPTIONS',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY0YzYwYzU2LTAyMjgtNGUyZS1hYTMwLTI2ZWZhNDdlMGY5OCIsImlhdCI6MTY4MjAwMTAxNiwic3ViIjoiZGV2ZWxvcGVyL2YzYzBhMmE1LTE5OTUtMGY5Ni0zYmYzLWY2NDM0NTEwMjgzNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI4MS4yMi4yMzMuNSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.JWqZOi2d9P4XrZu6wnZQLcet9SLUVhF7OM6bjNliCY6dWtz13Qf0V8LAzK7D4iKqrQwLxlOVW8FD_WkNeUsicA'
    })
  };

  constructor(private http: HttpClient) { }

  //CARTAS

  getAllCards(): Observable<Card[]> {
    const url = `${this.apiBaseUrl}`;
    return this.http.get<ApiResponse>(url, this.httpOptions).pipe(
      map(response => {
        const cards: Card[] = response.items.map(item => {
          return {
            id: item.id,
            name: item.name,
            maxLevel: item.maxLevel,
            iconUrls: item.iconUrls
          };
        });
        if (!cards || cards.length === 0) {
          throw new Error('No se encontraron cartas.');
        }
        return cards;
      }),
      catchError(error => {
        console.error(error);
        return throwError('Error en la solicitud.');
      })
    );
  }



  getCardById(id: number): Observable<Card> {
    const url = `${this.apiBaseUrl}/${id}`;
    return this.http.get<Card>(url, this.httpOptions).pipe(
      catchError(error => {
        console.error(error);
        return throwError('Error en la solicitud.');
      })
    );
  }


  //CLANES

  getAllClansByName(name: string): Observable<Clan[]> {
    const params = new HttpParams().set('name', name);

    return this.http.get<Clan[]>(`${this.ClanUrl}`, { params });
  }

  getClanDetails(tag: string): Observable<Clan> {
    const encodedTag = encodeURIComponent(tag);
    const url = `/v1/clans/${encodedTag}`;

    return this.http.get<Clan>(url);
  }

  getClanMembers(tag: string): Observable<ClanMember[]> {
    const encodedTag = encodeURIComponent(tag);
    const url = `${this.ClanUrl}/${encodedTag}/members`;

    return this.http.get<{ items: ClanMember[] }>(url).pipe(
      map(response => response.items),
      catchError(error => {
        console.error('Error al obtener los miembros del clan:', error);
        return throwError('Ocurrió un error al obtener los miembros del clan. Por favor, intenta nuevamente.');
      })
    );
  }


  //TORNEOS

  getAllTournaments(searchQuery: string): Observable<Tournament[]> {
    const params = new HttpParams().set('name', searchQuery);

    return this.http.get<Tournament[]>(this.tournamentUrl, { params })
  }

  getTournamentByTag(tournamentTag: string): Observable<Tournament> {
    const url = `${this.tournamentUrl}/${tournamentTag}`;
    return this.http.get<Tournament>(url);
  }


}



