export interface CategoriesModel {
    categories: Array<Categories>
}

export interface Categories {
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
}