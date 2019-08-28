import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from '../shoppinglist/shoppinglist.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)])
    , new Recipe('A Test Recipe', 'This is also test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)])
  ];
 constructor(private slService: ShoppinglistService){}
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
return this.recipes[id];
  }
  addToList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }
}
