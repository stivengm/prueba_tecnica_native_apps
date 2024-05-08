import { Component } from '@angular/core';
import { ParamMap, Router, ActivatedRoute, Params } from '@angular/router';
import { GetRecipeService } from '../../core/services/get-recipe.service';
import { Recipe } from '../../core/models';

@Component({
  selector: 'app-results-search',
  standalone: true,
  imports: [],
  templateUrl: './results-search.component.html',
  styleUrl: './results-search.component.scss'
})
export class ResultsSearchComponent {

  recipeResults: Recipe[] = [];

  constructor( private route: ActivatedRoute, private getRecipeService: GetRecipeService ) {
    console.log(this.route.snapshot.queryParamMap);
    
  }


  ngOnInit() {
    this.getRecipeService.dataRecipe.subscribe((data) => {
      this.recipeResults = data;
      console.log(this.recipeResults);
    });
  }

}
