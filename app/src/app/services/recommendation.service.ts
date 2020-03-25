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
  private apiUrl = environment.backendUrl + environment.recommendationsPath;

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

  public getRecommendations(type: Array<string>, category: Array<string>, industry: Array<string>): Observable<RecommendationResult[]>{
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
