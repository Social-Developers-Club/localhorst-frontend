import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private localStorageService: LocalStorageService) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('userName'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string){
    this.localStorageService.userName = email;
    this.currentUserSubject.next(email);
  }

  logout(){
    this.localStorageService.userName = null;
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean{
    if (this.localStorageService.userName){
      return true;
    }
    return false;
  }

}
