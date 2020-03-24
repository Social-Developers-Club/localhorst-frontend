import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  loginForm: FormGroup;

  hide = true;
  requestUserName: boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl({value: '', disabled: true}, Validators.required)
    });

    this.loginService.currentUser.subscribe(() => {
      this.checkForUserName();
    })
    this.checkForUserName();
  }

  login(){
    this.loginService.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
  }

  checkForUserName(){
    if (this.loginService.isLoggedIn()){
      this.requestUserName = false;
      this.loginForm.controls.password.setValue(null);
    } else {
      this.requestUserName = true;
    }
  }

}
