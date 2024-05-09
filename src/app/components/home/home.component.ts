import { Component } from '@angular/core';
import { GetRecipeService } from '../../core/services/get-recipe.service';
import { Categories, Recipe } from '../../core/models/index';
import { Router } from '@angular/router';

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

  constructor(private getRecipeService: GetRecipeService, private router: Router) {}

  ngOnInit() {
    this.getRecipeService.getCategories().subscribe((response) => {
      this.categories = response.categories;
    });

    this.getRecipeService.getDataInitial().subscribe((response) => {
      this.recipeSearch = response.meals;
    });

  }

  searchByCategory(category: String) {
    this.getRecipeService.getFilterByCategory(category).subscribe((response) => {
      this.recipeSearch = response.meals;
    });
  }

  viewDetails(id: String) {
    this.router.navigate([`/detail-recipe/${id}`]);
  }

}
