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
  vre:boolean = true;
  
  constructor(private route: Router, private activatedRoute: ActivatedRoute, private serv: ServisObjectService) { }

  
  
  ngOnInit() {

    //this.vre = true;

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


  redirectValueContinueWithObject(value1, value2, value3, value4, value5, value6, value7) {
          this.modelNosilac.imeNosilac = value1.value;
          this.modelNosilac.prezimeNosilac = value2.value;
          this.modelNosilac.emailNosilac = value3.value;
          this.modelNosilac.jmbgNosilac = value4.value;
          this.modelNosilac.pasosNosilac = value5.value;
          this.modelNosilac.adresaNosilac = value6.value;
          this.modelNosilac.telefonNosilac = value7.value;

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
         

      //  console.log(this.modelNizNosioci.imeNosilaca);

        let broj = this.modelNizNosioci.imeNosilaca.length;


      /*  for (var i = 0; i < broj; i++) {

            if (this.modelNizNosioci.imeNosilaca[i] == '' || this.modelNizNosioci.imeNosilaca[i] == null 
          || this.modelNizNosioci.prezimeNosilac[i] == '' || this.modelNizNosioci.prezimeNosilac[i] == null
          || this.modelNizNosioci.jmbgNosilac[i] == '' || this.modelNizNosioci.jmbgNosilac[i] == null 
          || this.modelNizNosioci.pasosNosilac[i] == '' || this.modelNizNosioci.pasosNosilac[i]== null
          || this.modelNizNosioci.adresaNosilac[i] == '' || this.modelNizNosioci.adresaNosilac[i] == null
          || this.modelNizNosioci.telefonNosilac[i] == '' || this.modelNizNosioci.telefonNosilac[i] == null) {

                this.vre = false;
                break;
                

            }

        }*/

       // if (this.modelNizNosioci == null) {
          //this.vre = false;
        //}

       // console.log(this.vre);


             /* if (this.vre == false) {

                alert("Niste popunili sva polja");
                this.route.navigate(['/DataUsers'])

              } else {*/

          this.serv.setValueNizNosioci(this.modelNizNosioci);
    
          this.route.navigate(['/Policy']); 
              //}
    
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
