import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpServiceService} from '../http-service.service';
import {ServisObjectService} from '../servis-object.service';
import {Nosilac} from '../nosilac';
import {NizNosioci} from '../niz-nosioci';
import {PutObject} from '../put-object';
import {PutnoObject} from '../putno-object';
import {StambenoObject} from '../stambeno-object';


@Component({
  selector: 'app-paying',
  templateUrl: './paying.component.html',
  styleUrls: ['./paying.component.css']
})
export class PayingComponent implements OnInit {

  constructor(private route: Router, private serv:HttpServiceService, private serv2:ServisObjectService) { }

    Nosioc:Nosilac;
    Nosioci:NizNosioci;

    Put:PutObject;
    Putno:PutnoObject;
    Stambeno: StambenoObject;
  
  redirectValueBackWithObject() {
    
          this.route.navigate(['/CostInsuranceTrip']);
    
      }

      goPayPal() {
          this.serv.goPayPal(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .catch(err => console.log(err));

      }

      goAscquier() {

          this.serv.goAscquier(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .catch(err => console.log(err));

      }

      goPos() {

          this.serv.goPOS(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .catch(err => console.log(err));

      }
    
      redirectValueCloseWithObject() {
    
         this.serv2.backNizNosioci();
         this.serv2.backNosilac();
         this.serv2.backPut();
         this.serv2.backPutno();
         this.serv2.backStambeno();
    
          this.route.navigate(['/InfoTrip']);
      }
  
  
  ngOnInit() {

    this.Nosioc = this.serv2.getNosilac();
    this.Nosioci = this.serv2.getNizNosioci();

    this.Put = this.serv2.getObjectPut();
    this.Putno = this.serv2.getObjectPutno();
    this.Stambeno = this.serv2.getObjectStambeno();


  }

}
