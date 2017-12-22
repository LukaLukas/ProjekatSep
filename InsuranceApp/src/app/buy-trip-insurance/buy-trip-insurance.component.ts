import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PutnoObject} from '../putno-object';
import {ServisObjectService} from '../servis-object.service';
@Component({
  selector: 'app-buy-trip-insurance',
  templateUrl: './buy-trip-insurance.component.html',
  styleUrls: ['./buy-trip-insurance.component.css']
})
export class BuyTripInsuranceComponent implements OnInit {


  //PutnoObjekat:PutnoObject = new PutnoObject();
  brojac:number = 0;

  modelVrednost = this.serv.getObjectPutno();

  constructor(private route: Router, private serv:ServisObjectService) { }

  porodicno:boolean = false;
  dugmeDisabled = true;

  changePorodicno() {

    if (this.modelVrednost.vrstaPaketa == '1') {

      this.porodicno = false;
    }

    else {

      this.porodicno = true;
    }

   // this.porodicno = !this.porodicno;

  }

  isValid() {

    return this.dugmeDisabled;

  }

  redirectValueCloseWithObject() {

      this.serv.backPutno();
      this.route.navigate(['/InfoTrip']);
  }

  redirectValueWithObject() {

      if (this.modelVrednost.vrstaPaketa == '1') {

        this.modelVrednost.brojac = 1;

      }

      else if (this.modelVrednost.vrstaPaketa == '2') {

          this.modelVrednost.brojac = this.modelVrednost.brojDece+this.modelVrednost.brojRoditelja;

      }
      this.serv.setValuePutno(this.modelVrednost);
      
    //let data = this.PutnoObjekat;
    //this.route.navigate(['/CostInsuranceTrip', {data:data , data2:data.destinacija}]);
    this.route.navigate(['/CostInsuranceTrip']);
  }

  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
          //console.log(this.PutnoObjekat.iznos);
    
        }

  ngOnInit() {

    this.modelVrednost = this.serv.getObjectPutno();

     /* if (this.modelVrednost.destinacija != "" &&  this.modelVrednost.iznos != "" && this.modelVrednost.pocetakOsiguranja != ""
        && this.modelVrednost.trajanjeOsiguranja != "" && this.modelVrednost.vrstaPaketa != "") {

              this.dugmeDisabled = false;

        }

        else {
            this.dugmeDisabled = true;

        }
*/
  }

}
