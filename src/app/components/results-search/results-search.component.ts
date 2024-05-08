import { Component } from '@angular/core';
import { ParamMap, Router, ActivatedRoute, Params } from '@angular/router';
import { GetRecipeService } from '../../core/services/get-recipe.service';
import { Recipe, QueryParams } from '../../core/models';

@Component({
  selector: 'app-results-search',
  standalone: true,
  imports: [],
  templateUrl: './results-search.component.html',
  styleUrl: './results-search.component.scss'
})
export class ResultsSearchComponent {

  recipeResults: Recipe[] = [];

  constructor( private route: ActivatedRoute, private getRecipeService: GetRecipeService ) { }

  ngOnInit() {

    var queryParams = this.route.snapshot.queryParams as QueryParams;
    if (this.recipeResults.length == 0) {
      this.getRecipeService.getSearchByWords(queryParams.search).subscribe((value) => {
        this.getRecipeService.dataRecipe.emit(value.meals);
        this.recipeResults = value.meals;
      })
    }

    this.getRecipeService.dataRecipe.subscribe((data) => {
      this.recipeResults = data;
    });
  }

}
