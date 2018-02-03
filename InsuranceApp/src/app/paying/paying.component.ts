import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpServiceService} from '../http-service.service';
import {ServisObjectService} from '../servis-object.service';
import {Nosilac} from '../nosilac';
import {NizNosioci} from '../niz-nosioci';
import {PutObject} from '../put-object';
import {PutnoObject} from '../putno-object';
import {StambenoObject} from '../stambeno-object';
import {Response} from '../response';


import {ResponseObjekat} from '../response-objekat'



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
    statusCode: number;
    modelResponse : ResponseObjekat;
  
  redirectValueBackWithObject() {
    
          this.route.navigate(['/CostInsuranceTrip']);

      }

      goPayPal() {
          this.serv.goPayPalUnion(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .then(data => this.modelResponse = data);
          document.getElementById('id3').style.display='block';
         // setTimeout(function(){ this.redirect(); }, 5000);
     
       

      }

      goPayPalPayment() {
        this.serv.goPayPalPayment()
        .then(data => this.modelResponse = data);
        document.getElementById('id3').style.display='block';
       // setTimeout(function(){ this.redirect(); }, 5000);
   
     

    }

      goAscquier() {

          this.serv.goAscquierUnion(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .then(data => this.modelResponse = data);
          document.getElementById('id3').style.display='block';
         // setTimeout(function(){ this.redirect }, 5000);
        
      

      }

      goPos() {

          this.serv.goPOSUnion(this.Nosioc, this.Nosioci, this.Put, this.Putno, this.Stambeno)
          .then(data => this.modelResponse = data);
          document.getElementById('id3').style.display='block';

         

         // setTimeout(function(){ this.route.navigate(['/InfoTrip']); }, 5000);
          
        //  this.route.navigate(['/InfoTrip']);

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
    this.modelResponse = new Response();
   // this.modelResponse = this.serv2.getOdgovor();

   // console.log(this.Nosioci.imeNosilaca);


  }










}

