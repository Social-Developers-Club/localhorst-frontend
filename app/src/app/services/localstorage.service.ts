import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  userNameSubject = new BehaviorSubject(this.userName);

 set userName(value) {
   this.userNameSubject.next(value); // this will make sure to tell every subscriber about the change.
   localStorage.setItem('userName', value);
 }

 get userName() {
   return localStorage.getItem('userName');
 }
}
