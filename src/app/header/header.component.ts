import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {Response} from "@angular/http";
import {AuthServiceService} from "../auth/auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthServiceService){}
  onSaveData(){
  this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response)=> {
        console.log(response);
      }
    );
  }
  onfetchData(){
   this.dataStorageService.getRecipes();
  }

  loginOut(){
    this.authService.logOut();
  }
}
