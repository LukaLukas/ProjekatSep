import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-stambeno',
  templateUrl: './info-stambeno.component.html',
  styleUrls: ['./info-stambeno.component.css']
})
export class InfoStambenoComponent implements OnInit {

  vrednost6;

  constructor(private route: Router) { 

    this.vrednost6 = 'w3-hide';
  }


  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }
    

  ngOnInit() {
  }



  Promena() {
    
        this.vrednost6 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost6 = 'w3-hide';
      }

}
