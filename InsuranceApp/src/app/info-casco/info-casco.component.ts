import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-casco',
  templateUrl: './info-casco.component.html',
  styleUrls: ['./info-casco.component.css']
})
export class InfoCascoComponent implements OnInit {

  vrednost4;


  constructor(private route: Router) { 

    this.vrednost4 = 'w3-hide';
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
    
        this.vrednost4 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost4 = 'w3-hide';
      }
    

}
