import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CategoriesModel, RecipeModel } from '../models/index';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetRecipeService {

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
}
