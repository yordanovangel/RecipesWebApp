import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Eggs Scrambled', 'You need two eggs and smile.',
      'http://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg'),
    new Recipe('Tomato Soup', 'Can you miss this soup, I don\'t think so!',
      'http://www.gotvetesmen.com/images/recipes/thumbs_300/238_57971.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }
}
