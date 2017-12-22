import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServisObjectService} from '../servis-object.service';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {


kontaktObjekat:any;

  vrednost10;
  vidi;







  constructor(private route: Router, private serv2: ServisObjectService, private serv:HttpServiceService) { 
    this.vrednost10 = 'w3-hide';
    this.vidi = "w3-hide";
  }

posaljiObjekat () {

  this.serv2.setValueContact(this.kontaktObjekat);
    
           this.serv.goContact(this.kontaktObjekat)
            .catch(err => console.log(err));
    
          


}

  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
    
        }

  ngOnInit() {

    this.kontaktObjekat = this.serv2.getContact();
  }

  FunctionPromena() {

      this.vidi = " w3-half w3-show w3-animate-bottom ";


  }

  FunctionPromena2() {
    this.serv2.backContact();
    this.vidi = "w3-hide";
  }



  Promena() {
    
        this.vrednost10 = 'w3-show w3-card-4 w3-center w3-animate-top w3-display-container';
    
      }
    
      Ugasi() {
        this.vrednost10 = 'w3-hide';
      }
    

}
