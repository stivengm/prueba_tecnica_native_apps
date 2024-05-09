export interface RecipeModel {
    meals: Array<Recipe>
}

export interface Recipe {
    strMeal: String,
    strMealThumb: String,
    idMeal: String
}

export interface QueryParams {
    type: String,
    search: String,
    id: String
}