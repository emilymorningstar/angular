import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
recipes = Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
