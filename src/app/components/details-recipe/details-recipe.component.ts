import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRecipeService } from '../../core/services/get-recipe.service';
import { QueryParams, Recipe, RecipeDetail } from '../../core/models';

@Component({
  selector: 'app-details-recipe',
  standalone: true,
  imports: [],
  templateUrl: './details-recipe.component.html',
  styleUrl: './details-recipe.component.scss'
})
export class DetailsRecipeComponent {

  recipeResults: RecipeDetail[] = [];

  constructor(private getRecipeService: GetRecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    var params = this.route.snapshot.params as QueryParams;

    this.getRecipeService.getRecipeById(params.id).subscribe((data) => {
      var tagsFormat: Array<String> = [];

      if (data.meals[0].strTags != "" && data.meals[0].strTags != null) {
        var tags = data.meals[0].strTags.split(',')
        for (let i = 0; i < tags.length; i++) {
          tagsFormat.push(tags[i]);
        }
      }

      this.recipeResults = data.meals;
      this.recipeResults[0].tagsFormat = tagsFormat;

    });

  }

  viewMore(url: string) {
    var newUrl = url;
    window.open(newUrl, "_blank");
  }

}
