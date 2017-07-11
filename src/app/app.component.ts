import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature:string = 'recipe';

  ngOnInit(){

    firebase.initializeApp({
      apiKey: "AIzaSyBndPlPOeN6DburNOpDgXjQ4KwtbiYsLL4",
      authDomain: "recipewebapp-a4695.firebaseapp.com"
    });
  }
  onNavigate(feature:string) {
this.loadedFeature = feature;
  }
}
