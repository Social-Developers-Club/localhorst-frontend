import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { RecommendationResult } from 'src/app/models/recommendation-result';

@Component({
  selector: 'app-solution-overview',
  templateUrl: './solution-overview.component.html',
  styleUrls: ['./solution-overview.component.css']
})
export class SolutionOverviewComponent implements OnInit {

  recommendationResults : Array<RecommendationResult> = [];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.recommendationService.getAllRecommendations().subscribe(data => {
      this.recommendationResults = data;
    });
  }

  openCard(link: string){
    window.open(link);
  }

}
