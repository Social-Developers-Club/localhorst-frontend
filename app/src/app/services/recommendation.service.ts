import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecommendationResult } from '../models/recommendation-result';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Recommendation } from '../models/recommendation';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private apiRoot = 'http://sfl-backend.philenius.de';

  constructor(private http: HttpClient) { }

  public getAllRecommendations(): Observable<RecommendationResult[]> {
    const apiUrl = `${this.apiRoot}/recommendations/`;

    return this.http.get(apiUrl).pipe(
      map((res: Array<any>) => {
        return res.map(item => {
          return new RecommendationResult(
            item.id,
            item.score,
            new Recommendation(
              item.doc.category, item.doc.recommendation,
              item.doc.type, item.doc.industry, item.doc.link
            )
          );
        });
      })
    );

  }
}
