import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [


    { provide: CarouselConfig, useValue: { interval: 4500, noPause: true } }
  ],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


   

    redirectHome() {


      this.route.navigate(['/']);
    }

    redirectValue(vrednost) {

      this.route.navigate(['/'+vrednost]);

    }

   
  
  constructor(private route: Router) { 


    //setTimeout(this.povecaj, 2000);

  }
  


  ngOnInit() {

  }

}



























