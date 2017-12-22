import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-sport',
  templateUrl: './info-sport.component.html',
  styleUrls: ['./info-sport.component.css']
})
export class InfoSportComponent implements OnInit {

  vrednost5;


  constructor(private route: Router) {

    this.vrednost5 = 'w3-hide';
   }

  ngOnInit() {
  }


  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }
    

  Promena() {
    
        this.vrednost5 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost5 = 'w3-hide';
      }

}
