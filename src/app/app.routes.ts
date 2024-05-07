import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsRecipeComponent } from './components/details-recipe/details-recipe.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'detail-recipe/:id',
        component: DetailsRecipeComponent
    }
];
