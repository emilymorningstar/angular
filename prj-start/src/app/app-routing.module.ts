import {NgModule} from '@angular/core';
import {RecipebookComponent} from './recipebook/recipebook.component';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeStartComponent} from './recipebook/recipe-start/recipe-start.component';
import {RecipedetailsComponent} from './recipebook/recipedetails/recipedetails.component';
import {RecipeEditComponent} from './recipebook/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipebookComponent, children: [
    {path: '', component: RecipeStartComponent},
      {path: ':new', component: RecipeEditComponent},
    {path: ':id', component: RecipedetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppinglistComponent}
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
