import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  vrednost8;


  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }
    

  Promena() {
    
        this.vrednost8 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost8 = 'w3-hide';
      }


  constructor(private route: Router) {


    this.vrednost8 = 'w3-hide';

   }

  ngOnInit() {
  }

}
