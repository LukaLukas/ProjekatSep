import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import {PutnoObject} from '../putno-object';
@Component({
  selector: 'app-trip-insurance',
  templateUrl: './trip-insurance.component.html',
  styleUrls: ['./trip-insurance.component.css']
})
export class TripInsuranceComponent implements OnInit {


  //PutnoObjekat:PutnoObject = new PutnoObject();

  vrednost2;



  redirectHome() {


    this.route.navigate(['/']);
  }

  redirectValue(vrednost) {
    
          this.route.navigate([vrednost]);
    
        }




  Proba() {

    console.log("fjsklfjslfjslfjsdkljsfl");

  }

  Promena() {

    this.vrednost2 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';

  }

  Ugasi() {
    this.vrednost2 = 'w3-hide';
  }

  constructor( private route: Router
  ) {

    this.vrednost2 = 'w3-hide';
   }

  ngOnInit() {
  }

}
