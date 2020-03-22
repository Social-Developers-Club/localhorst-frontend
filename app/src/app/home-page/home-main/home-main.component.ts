import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  requestUserName: boolean = true;
  userName: string;

  constructor() { }

  ngOnInit(): void {
    this.checkForUserName();
  }

  saveName(name: string){
    localStorage.setItem('userName', name);
    this.checkForUserName();
  }

  checkForUserName(){
    this.userName = localStorage.getItem('userName');

    if (this.userName){
      this.requestUserName = false;
    }
  }

}
