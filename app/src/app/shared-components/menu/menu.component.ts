import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUser.subscribe((user: string) => {
      this.user = user;
    });
  }

  logout(){
    this.loginService.logout();
  }

}
