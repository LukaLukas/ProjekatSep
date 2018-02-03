import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';
import {Nosilac} from '../nosilac';
import {NizNosioci} from '../niz-nosioci';

import {PutObject} from '../put-object';
import {PutnoObject} from '../putno-object';
import {StambenoObject} from '../stambeno-object';

import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {



  constructor(private route: Router, private serv3:ServisObjectService, private serv2:HttpServiceService) { }



    modelNosilac :Nosilac;
    modelNizNosioci: NizNosioci;

    Put:PutObject;
    Putno:PutnoObject;
    Stambeno: StambenoObject;
    cena:string = '';



  redirectValueBackWithObject() {

    //  this.serv3.setValueNosilac(this.modelNosilac);
    this.serv3.backNosilac();
      this.route.navigate(['/CostInsuranceTrip']);

  }

  redirectValueCloseWithObject() {

      this.serv3.backNosilac();
      this.serv3.backNizNosioci();
      this.serv3.backPut();
      this.serv3.backPutno();
      this.serv3.backStambeno();

      this.route.navigate(['/InfoTrip']);
  }

  redirectValueContinueWithObject(val1, val2, val3, val4, val5, val6, val7) {


      this.modelNosilac.imeNosilac = val1.value;
      this.modelNosilac.prezimeNosilac = val2.value;
      this.modelNosilac.emailNosilac = val3.value;
      this.modelNosilac.jmbgNosilac = val4.value;
      this.modelNosilac.pasosNosilac = val5.value;
      this.modelNosilac.adresaNosilac = val6.value;
      this.modelNosilac.telefonNosilac = val7.value;

      this.serv3.setValueNosilac(this.modelNosilac);

      this.serv2.goCena(this.modelNosilac, this.modelNizNosioci, this.Put, this.Putno, this.Stambeno)
      .then(data => this.cena = data);

      this.serv3.setValueCena(this.cena);






      this.route.navigate(['/Paying']);

  }

  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }
  ngOnInit() {

    this.modelNosilac = this.serv3.getNosilac();
    this.modelNizNosioci = this.serv3.getNizNosioci();

    /*
        this.Put = this.serv2.getObjectPut(); //za sada nek bude pod komentarima
        this.Putno = this.serv2.getObjectPutno();
        this.Stambeno = this.serv2.getObjectStambeno();*/ 



    //console.log(this.modelNizNosioci.imeNosilaca);
  }

}
