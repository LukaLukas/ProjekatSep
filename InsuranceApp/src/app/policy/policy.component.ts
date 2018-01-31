import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';
import {Nosilac} from '../nosilac';
import {NizNosioci} from '../niz-nosioci';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {



  constructor(private route: Router, private serv3:ServisObjectService) { }



    modelNosilac :Nosilac;
    modelNizNosioci: NizNosioci;



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

    //console.log(this.modelNizNosioci.imeNosilaca);
  }

}
