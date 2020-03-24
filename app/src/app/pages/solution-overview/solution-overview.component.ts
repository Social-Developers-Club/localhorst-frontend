import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { RecommendationResult } from 'src/app/models/recommendation-result';
import { Element } from '@angular/compiler';
import { Recommendation } from 'src/app/models/recommendation';
import { Category } from 'src/app/models/enums/category';
import { Industry } from 'src/app/models/enums/industry';
import { Type } from 'src/app/models/enums/type';

@Component({
  selector: 'app-solution-overview',
  templateUrl: './solution-overview.component.html',
  styleUrls: ['./solution-overview.component.css']
})
export class SolutionOverviewComponent implements OnInit {

  recommendationResults : Array<RecommendationResult> = [];

  categoryFilter: Array<Category> = [Category.business, Category.financial];
  industryFilter: Array<Industry> = [Industry.culture, Industry.freelancer, Industry.restaurants, Industry.retail, Industry.service];
  typeFilter: Array<Type> = [Type.info, Type.solution];

  type;
  category;
  industry;

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
