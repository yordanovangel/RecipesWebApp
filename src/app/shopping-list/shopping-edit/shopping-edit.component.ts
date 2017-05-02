import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
@Output() ingredientAdded =new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }
  addNewIngredient() {
const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
const addedIngredient = new Ingredient(ingName, ingAmount);
this.ingredientAdded.emit(addedIngredient);
  }
}
