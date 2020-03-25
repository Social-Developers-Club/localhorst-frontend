import { Component, OnInit } from '@angular/core';
import { RecommendationService } from 'src/app/services/recommendation.service';
import { RecommendationResult } from 'src/app/models/recommendation-result';
import { Element } from '@angular/compiler';
import { Recommendation } from 'src/app/models/recommendation';
import { Category } from 'src/app/models/enums/category';
import { Industry } from 'src/app/models/enums/industry';
import { Type } from 'src/app/models/enums/type';
import { SelectOption } from 'src/app/models/select-option';

@Component({
  selector: 'app-solution-overview',
  templateUrl: './solution-overview.component.html',
  styleUrls: ['./solution-overview.component.css']
})
export class SolutionOverviewComponent implements OnInit {

  recommendationResults : Array<RecommendationResult> = [];

  categoryFilter: Array<SelectOption> = [{id:'business', name: Category.business}, {id:'financial', name: Category.financial}];
  industryFilter: Array<SelectOption> = [{id:'culture', name: Industry.culture}, {id:'freelancer', name: Industry.freelancer}, 
                                        {id:'restaurants', name: Industry.restaurants}, {id:'retail', name: Industry.retail},
                                        {id:'service', name: Industry.service}];
  typeFilter: Array<SelectOption> = [{id:'info', name: Type.info}, {id:'solution', name: Type.solution}];

  type: Array<Type>;
  category: Array<Category>;
  industry: Array<Industry>;

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.filter();
  }

  filter(){
    this.recommendationService.getRecommendations(this.type, this.category, this.industry).subscribe(data => {
      this.setColors(data);
      this.recommendationResults = data;
    });
  }

  private setColors(data: Array<RecommendationResult>){
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
