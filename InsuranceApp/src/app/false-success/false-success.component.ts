import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-false-success',
  templateUrl: './false-success.component.html',
  styleUrls: ['./false-success.component.css']
})
export class FalseSuccessComponent implements OnInit {

  constructor(private route: Router) { }

  
  vrednost4;
  
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
  
  ngOnInit() {

    this.vrednost4 = 'w3-hide';
  }

}
