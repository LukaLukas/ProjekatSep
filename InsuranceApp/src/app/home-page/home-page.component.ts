import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
//import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import {Router} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';
import {ProbaObject} from '../proba-object';
import {PutnoObject} from '../putno-object';
import {Nosilac} from '../nosilac';
import {NizNosioci} from '../niz-nosioci';
import {PutObject} from '../put-object';
import {StambenoObject} from '../stambeno-object';
import {HttpServiceService} from '../http-service.service';
import {Response} from '../response';
import {BazaNizData} from '../baza-niz-data';



import {BazaData} from '../baza-data';
import {BazaPodData} from '../baza-pod-data';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [


    { provide: CarouselConfig, useValue: { interval: 4500, noPause: true } }
  ],
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


   modelProba = this.serv.getProbaObject();
   model: ProbaObject = new ProbaObject();
   str:String;
   putno:PutnoObject = new PutnoObject('Srbija', '2', 'deca', 'Fudbal', 'danas', '3', '30000', 2, 3, 1);
   nos:Nosilac = new Nosilac('pera', 'peric', 'gdgd', 'fsfsfsd', 'sfsf', 'dada', 'dfgdg');
   stamb:StambenoObject = new StambenoObject('3', '80', '2', '80', 'danas', 'adresa', 'lukaLukic', '2608999322', true );
   put:PutObject = new PutObject('lukaLukic', '8678678', '3', '2', '30', '20', '3', 'ne', 'reno', '2009', '234432324324', '979707979978', true );
   nizNosioci:NizNosioci = new NizNosioci(['pera', 'luka'], ['peric', 'lukic'], ['76557', '67557'], ['pasos1', 'pasos2'], ['sftrds2', 'adrea2'], ['7878668', '768668'] );
   obj:any;
   modelResponse : Response = new Response();
   putnoBaza:BazaNizData = new BazaNizData();
   kaskoBaza:BazaNizData = new BazaNizData();
   stambenoBaza:BazaNizData = new BazaNizData();
   bazaProba:BazaData = new BazaData();
   broj:number = 3;
   vr:string ;
   brojevi:Array<number>= [];
  // lista:Array<BazaData> = new Array<BazaData>();


  brojevi2 = Array().fill(4);


    redirectHome() {


      this.route.navigate(['/']);
    }

    redirectValue(vrednost) {

      this.route.navigate(['/'+vrednost]);

    }

   
  
  constructor(private route: Router, private serv:ServisObjectService, private serv2:HttpServiceService) { 


    //setTimeout(this.povecaj, 2000);

  }


    
  


  ngOnInit() {



    this.serv2.goUnion(this.putno, this.nos, this.stamb, this.put, this.nizNosioci);
   

    //putno = new PutnoObject('evropa', '2', 'deca', 'danas', '3', '30000', 2, 3, 1);

  

    this.serv2.goProba().then(modelProba => this.modelProba = modelProba);

   // this.serv2.izvuciPutno().then(data => this.bazaProba = data);


    this.vr = this.bazaProba.naziv;
    console.log(this.vr);

    console.log(this.modelProba);
    //this.serv2.goJustPutno(this.putno);
    //this.serv2.testRequest();
    //this.serv2.goNosilacProba(this.nos);

    //this.serv2.goResponse().then(data => this.modelResponse = data);
    //console.log(this.modelResponse);


    /*setTimeout(function () {
      if (this.modelResponse.code == "200") {
        
              alert("Bravo majstore");
        
            }
  }, 5000);*/

    

  }

}



























