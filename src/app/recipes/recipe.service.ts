import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Eggs Scrambled',
      'You need two eggs and smile.',
      'http://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg',
      [
        new Ingredient('CocoCola', 1),
        new Ingredient('Salt', 200)
      ]
    ),
    new Recipe('Tomato Soup',
      'Can you miss this soup, I don\'t think so!',
      'http://www.gotvetesmen.com/images/recipes/thumbs_300/238_57971.jpg',
      [
        new Ingredient('Torta', 1),
        new Ingredient('Kafe', 2)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngrediantsToSL(ingrediants: Ingredient[]) {
this.shoppingListService.addIngrediants(ingrediants)
  }
}
