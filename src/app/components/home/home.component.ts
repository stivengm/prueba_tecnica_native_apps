import { Component } from '@angular/core';
import { GetRecipeService } from '../../core/services/get-recipe.service';
import { Categories, Recipe } from '../../core/models/index';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  categories: Categories[] = [];
  recipeSearch: Recipe[] = [];

  constructor(private getRecipeService: GetRecipeService) {

  }

  ngOnInit() {
    console.log("Hola mundo ngOnInit()");
    this.getRecipeService.getCategories().subscribe((response) => {
      this.categories = response.categories;
    });

    this.getRecipeService.getDataInitial().subscribe((response) => {
      console.log(response);
      this.recipeSearch = response.meals;
    })

    console.log(this.categories);
    

  }

  searchByCategory(category: String) {
    console.log(category);
    this.getRecipeService.getFilterByCategory(category).subscribe((response) => {
      this.recipeSearch = response.meals;
    });
  }

}
