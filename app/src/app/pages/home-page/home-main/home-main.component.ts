import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  requestUserName: boolean = true;
  userName: string;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.userNameSubject.subscribe(() => {
      this.checkForUserName();
    })
  }

  saveName(name: string){
    this.localStorageService.userName = name;
    this.checkForUserName();
  }

  checkForUserName(){
    this.userName = this.localStorageService.userName;

    if (this.userName){
      this.requestUserName = false;
    } else {
      this.requestUserName = true;
    }
  }

}
