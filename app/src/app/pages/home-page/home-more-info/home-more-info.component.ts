import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-home-more-info',
  templateUrl: './home-more-info.component.html',
  styleUrls: ['./home-more-info.component.css']
})
export class HomeMoreInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  openHackathonPage(){
    window.open('https://wirvsvirushackathon.org/');
  }

}
