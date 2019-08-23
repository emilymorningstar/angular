import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
 , new Recipe('A Test Recipe', 'This is a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
