import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthServiceService} from "../auth/auth-service.service";

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthServiceService) { }

  storeRecipes(){
    return this.http.put('https://recipewebapp-a4695.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken()
console.log(token);

    this.http.get('https://recipewebapp-a4695.firebaseio.com/recipes.json?auth='+ token)
      .map(
        (response: Response) =>{
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients']=[];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
