import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';

@Component({
  selector: 'app-cost-insurance-trip',
  templateUrl: './cost-insurance-trip.component.html',
  styleUrls: ['./cost-insurance-trip.component.css']
})
export class CostInsuranceTripComponent implements OnInit, OnDestroy {


  valueObjekatPutno: any;
valueObjekatPut:any;
valueObjekatStambeno:any;
datum:string;
  private routeSub:any;
  iznos:string;
  result:any;
  result2:any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private serv2: ServisObjectService) { }


    redirectHome() {


      this.route.navigate(['/']);
    }

    redirectValue(vrednost) {

      this.route.navigate(['/'+vrednost]);

    }

    redirectValueCloseWithObjects() {

      this.serv2.backPut();
      this.serv2.backPutno();
      this.serv2.backStambeno();
      this.serv2.backNizNosioci();
      this.serv2.backNosilac();
      this.route.navigate(['/InfoTrip'])
    }

    redirectValueWithObjects() {


      this.serv2.setValuePutno(this.valueObjekatPutno);

      this.serv2.setValuePut(this.valueObjekatPut);

      this.serv2.setValueStambeno(this.valueObjekatStambeno);

      this.route.navigate(['/DataUsers']);

    }


  ngOnInit() {


        this.valueObjekatPutno = this.serv2.getObjectPutno();
        this.valueObjekatPut = this.serv2.getObjectPut();
        this.valueObjekatStambeno = this.serv2.getObjectStambeno();
        this.datum = new Date().toDateString();
        console.log(this.valueObjekatPutno.iznos);
        console.log(this.valueObjekatPutno.brojac);
  //  this.routeSub = this.activatedRoute.params.subscribe(params => {
     // console.log(params['data']);
      //console.log(params['data2']);

     // this.iznos = params['data']['iznos'];
      //console.log(this.iznos);
   // })



    this.result = new Date(this.valueObjekatPutno.pocetakOsiguranja);
    this.result.setDate(this.result.getDate()+ this.valueObjekatPutno.trajanjeOsiguranja);
    this.result2 = new Date(this.result).toDateString();
  }

  ngOnDestroy() {

   // this.routeSub.unsubscribe();
  }

}


