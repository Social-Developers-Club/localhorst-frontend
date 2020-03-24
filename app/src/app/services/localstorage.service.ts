import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  userNameSubject = new BehaviorSubject(this.userName);

 set userName(value) {
   if (!value){
     localStorage.removeItem('userName');
   } else {
    localStorage.setItem('userName', value);
   }

   this.userNameSubject.next(value); // this will make sure to tell every subscriber about the change.
 }

 get userName() {
   return localStorage.getItem('userName');
 }
}
