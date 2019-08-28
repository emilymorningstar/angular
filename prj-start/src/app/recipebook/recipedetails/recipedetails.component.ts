import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  OnAddToShoppingList() {
this.recipeService.addToList(this.recipe.ingredients);
  }

  onEditRecipe() {
this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {

  }
}
