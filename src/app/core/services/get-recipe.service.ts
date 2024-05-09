import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CategoriesModel, Recipe, RecipeModel, RecipeDetailInterface } from '../models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {

  isLoading = new EventEmitter<boolean>();
  dataRecipe = new EventEmitter<Recipe[]>();

  constructor( private http: HttpClient ) { }

  getDataInitial() {
    return this.getFilterByCategory("Dessert");
  }

  getCategories(): Observable<CategoriesModel> {
    return this.http.get<CategoriesModel>(`https://${environment.endPoint}/categories.php`);
  }

  getFilterByCategory(category: String): Observable<RecipeModel> {
    return this.http.get<RecipeModel>(`https://${environment.endPoint}/filter.php?c=${category}`);
  }

  getSearchByWords(value: String) {
    return this.http.get<RecipeModel>(`https://${environment.endPoint}/search.php?s=${value}`);
  }

  getRecipeById(idRecipe: String): Observable<RecipeDetailInterface> {
    return this.http.get<RecipeDetailInterface>(`https://${environment.endPoint}/lookup.php?i=${idRecipe}`);
  }
}
