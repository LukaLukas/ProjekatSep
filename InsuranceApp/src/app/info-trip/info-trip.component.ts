import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-trip',
  templateUrl: './info-trip.component.html',
  styleUrls: ['./info-trip.component.css']
})
export class InfoTripComponent implements OnInit {



  vrednost3;

  constructor(private route: Router) {

    this.vrednost3 = 'w3-hide';
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
    
        this.vrednost3 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost3 = 'w3-hide';
      }
    


}
