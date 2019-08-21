import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { EditComponent } from './shoppinglist/edit/edit.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipebook/recipeitem/recipeitem.component';
import { RecipedetailsComponent } from './recipebook/recipedetails/recipedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    EditComponent,
    IngredientComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
