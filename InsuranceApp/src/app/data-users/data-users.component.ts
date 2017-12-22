import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';
import {Nosilac} from '../nosilac';


@Component({
  selector: 'app-data-users',
  templateUrl: './data-users.component.html',
  styleUrls: ['./data-users.component.css']
})
export class DataUsersComponent implements OnInit {

  
  pokazivac:boolean;
  valueObjekatPutno: any;
  modelNosilac:any;
  modelNizNosioci:any;
  brojLjudi: number = 0;
  brojDece:number = 0;
  brojRoditelja:number = 0;
  brojevi:Array<number>= [];
  
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private serv: ServisObjectService) { }

  
  
  ngOnInit() {

    this.modelNosilac = this.serv.getNosilac();     
    this.modelNizNosioci = this.serv.getNizNosioci();

    this.valueObjekatPutno = this.serv.getObjectPutno();
    this.brojLjudi = this.valueObjekatPutno.brojac;
    this.brojDece = this.valueObjekatPutno.brojDece;
    this.brojRoditelja = this.valueObjekatPutno.brojRoditelja;
    if (this.brojLjudi == 1) {

      this.pokazivac = true;
    }

    else {

      this.pokazivac = false;
      this.brojevi = Array(this.brojLjudi).fill(4);
    }

    console.log(this.pokazivac);
    console.log(this.brojevi);

  }


  redirectValueContinueWithObject() {
    
          this.serv.setValueNosilac(this.modelNosilac);
    
          this.route.navigate(['/Paying']); // za sada
    
      }


  redirectValueBackWithObject() {
    
          this.modelNosilac = this.serv.backNosilac();
    
          this.route.navigate(['/CostInsuranceTrip']); // za sada
    
      }


      redirectValueCloseWithObject() {
        
             // this.serv.backNosilac();
              this.serv.backNosilac();
              this.serv.backPut();
              this.serv.backPutno();
              this.serv.backStambeno();
        
              this.route.navigate(['/InfoTrip']);
          }


  redirectValueContinueWithObject2() {
    
         // this.serv.setValueNosilac(this.modelNosilac);
          this.serv.setValueNizNosioci(this.modelNizNosioci);
    
          this.route.navigate(['/Policy']); 
    
      }

  redirectValueBackWithObject2() {


   // this.modelNosilac = this.serv.backNosilac();
      this.modelNizNosioci = this.serv.backNizNosioci();
    
    this.route.navigate(['/CostInsuranceTrip']);
  }


  redirectValueCloseWithObject2() {
    
         // this.serv.backNosilac();
         this.serv.backPut();
         this.serv.backPutno();
         this.serv.backStambeno();
   
          this.serv.backNizNosioci();
    
          this.route.navigate(['/InfoTrip']);
      }


  redirectValueWithObjects() {
    
    
          this.serv.setValuePutno(this.valueObjekatPutno);
    
        
    
          this.route.navigate(['/DataUsers']);
    
        }
 
 
  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }

}
