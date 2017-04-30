import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('Eggs Scrambled','You need two eggs and smile.',
    'http://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg'),
  new Recipe('Eggs Scrambled','You need two eggs and smile.',
    'http://assets.epicurious.com/photos/57b35f844924889253994109/master/pass/scrambled-eggs.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
