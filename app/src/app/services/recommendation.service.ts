import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationResult } from '../models/recommendation-result';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Recommendation } from '../models/recommendation';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  // In development mode, we define a backend URL through the configuration file 'environment.ts'.
  // For delopyment on a server / localhost, we assume that frontend and backend run on the same host and port.
  private apiHost = environment.apiHost ? environment.apiHost : `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  private apiUrl = `${this.apiHost}/api/recommendations`;

  constructor(private http: HttpClient) { }

  public getAllRecommendations(): Observable<RecommendationResult[]> {
    return this.http.get(this.apiUrl).pipe(
      map((res: Array<any>) => {
        return res.map(item => {
          return this.mapResultToRecommendationResult(item);
        });
      })
    );
  }

  public getRecommendations(type: string, category: string, industry: Array<string>): Observable<RecommendationResult[]>{
    const params =  {
      type: type ? type : '',
      category: category ? category : '',
      industry: industry ? industry : ''
    }
    return this.http.get(this.apiUrl, {
        params: params
      }).pipe(
      map((res: Array<any>) => {
        return res.map(item => {
          return this.mapResultToRecommendationResult(item);
        });
      })
    );    
  }

  private mapResultToRecommendationResult(item): RecommendationResult{
    return new RecommendationResult(
      item.id,
      item.score,
      new Recommendation(
        item.doc.category, item.doc.title, item.doc.description,
        item.doc.type, item.doc.industry, item.doc.link, item.doc.imageUrl
      )
    );
  }
}
