import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TaePayload, TaeResponse } from './tae.interfaces';

@Injectable()
export class TaeService {

  constructor(private http: HttpClient) { }

  postTaeForm(taePayload: TaePayload): Observable<TaeResponse> {
    return this.http.post<TaeResponse>('https://app.bde.es/asb_www/es/getTaeHipotecarioSimulation.action', taePayload);
  }

}
