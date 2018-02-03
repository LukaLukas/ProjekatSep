import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private route: Router) { }

  vrednost4;
  
  ngOnInit() {
    this.vrednost4 = 'w3-hide';


  }


  Promena() {
    
        this.vrednost4 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost4 = 'w3-hide';
      }
    

  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }

}
