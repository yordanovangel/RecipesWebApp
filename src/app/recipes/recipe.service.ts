import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Eggs Scrambled', 'You need two eggs and smile.',
      'http://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg'),
    new Recipe('Tomato Soup', 'Can you miss this soup, I don\'t think so!',
      'http://www.gotvetesmen.com/images/recipes/thumbs_300/238_57971.jpg')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
