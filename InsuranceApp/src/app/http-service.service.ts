import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import {Nosilac} from './nosilac';
import {NizNosioci} from './niz-nosioci';
import {Contact} from './contact';
@Injectable()
export class HttpServiceService {

  constructor(private _http: Http) { }


  goPayPal(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any) {

    let a = {
        nosilac:Nosilac,
        nosioci:Nosioci,
        put:Put,
        putno:Putno,
        stambeno:Stambeno


    };
    return this._http.post("/PayPalPayment", a )
    .map(data => data.json()).toPromise()


  }
  goContact(kontakt:Contact) {



    return this._http.post("/Contact", kontakt)
    .map(data => data.json()).toPromise()
  }

  goAscquier(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any) {

    let b = {
      nosilac:Nosilac,
      nosioci:Nosioci,
      put:Put,
      putno:Putno,
      stambeno:Stambeno


  };
  return this._http.post("/AscquierPayment", b )
  .map(data => data.json()).toPromise()

  }

  goPOS(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any) {


    let c = {
      nosilac:Nosilac,
      nosioci:Nosioci,
      put:Put,
      putno:Putno,
      stambeno:Stambeno


  };
  return this._http.post("/PosPayment", c )
  .map(data => data.json()).toPromise()



  }

}
