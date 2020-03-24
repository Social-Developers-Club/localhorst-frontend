import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { RecommendationResult } from 'src/app/models/recommendation-result';
import { Element } from '@angular/compiler';
import { Recommendation } from 'src/app/models/recommendation';

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
      this.setColors(data);
      this.recommendationResults = data;
    });
  }

  setColors(data: Array<RecommendationResult>){
    let index: number = 1;
    data.forEach(item => {
      if (index === 4){
        index = 1;
      }
      item.color = index;
      index++;
    });
  }

  openCard(link: string){
    window.open(link);
  }

}
