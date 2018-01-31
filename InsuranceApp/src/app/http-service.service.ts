import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import {Nosilac} from './nosilac';
import {NizNosioci} from './niz-nosioci';
import {Contact} from './contact';
import {ProbaObject} from './proba-object';
import {PutnoObject} from './putno-object';
import {StambenoObject} from './stambeno-object';
//import {Response} from './response';

import {ResponseObjekat} from './response-objekat';
import {PutObject} from './put-object';
import {BazaData} from './baza-data';
import {BazaNizData} from './baza-niz-data';
import { URLSearchParams } from "@angular/http";
import {StavkaOsiguranja} from './stavka-osiguranja';
//import {HttpClient, HttpRequest, HttpEvent} from '@angular/common';


@Injectable()
export class HttpServiceService {



  constructor(private _http: Http) { }



  private headers = new Headers({ 'Content-Type': 'application/json' });
  private Url = '/api/insurance/proba';
  goProba() : Promise<ProbaObject> {

      console.log('jel odes ovde');

    return this._http.get(this.Url)
    //return this._http.get(http://localhost:8080/api/bikes/proba")
    .toPromise()
    .then(response => response.json() as ProbaObject)
    .catch(this.handleError);


  }

  izvuciPutno() : Promise<BazaNizData> {

    let urlpr = '/api/insurance/sviPutno';
    
      return this._http.get(urlpr)
      .toPromise()
      .then(response => response.json() as BazaNizData)
      .catch(this.handleError);

  }

  private urlbe = '/api/insurance/stavkaosig/all/po';
  public getBeagleboards(): Promise<StavkaOsiguranja[]> {
      return this._http.get(this.urlbe)
        .toPromise()
        .then(response => response.json() as StavkaOsiguranja[])

        
    }


    private urlsta = '/api/insurance/stavkaosig/all/so';
    public getStambenoBaza(): Promise<StavkaOsiguranja[]> {
      return this._http.get(this.urlsta)
      .toPromise()
      .then(response => response.json() as StavkaOsiguranja[])

    }

    private urlbk = '/api/insurance/stavkaosig/all/ao';
    public getKaskoBaza(): Promise<StavkaOsiguranja[]> {

        return this._http.get(this.urlbk)
        .toPromise()
        .then(response => response.json() as StavkaOsiguranja[])
    }


  goResponse() : Promise<Response> {

      let urlr = '/api/insurance/response';
      return this._http.post(urlr, 'pera')
      .toPromise()
      .then(response => response.json() as Response)
      .catch(this.handleError);


  }




  private url4 = '/api/insurance/pokusaj';
  testRequest() {

      let username = 'luka';
      let password = 'luka24';

    let data: URLSearchParams = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    return this._http.post(this.url4, data)
    .toPromise()
    .catch(this.handleError);

  }
/*
  private Url2 = '/api/insurance/helloplain';
  goProba2() : Promise<String> {

          console.log('jel odes ovde');
    
        return this._http.get(this.Url)
       
        .toPromise()
        .then(response => response.text() as String)
        .catch(this.handleError);
    
    
}*//*
      private url3 = '/api/insurance/PayPalPayment';
    goJustPutno(Putno:any) : Promise<PutnoObject> {

      let h = Putno;
      return this._http.post(this.url3, JSON.stringify(h), {headers : this.headers })
      .toPromise()
      //.then(res => res.json() as PutnoObject)
      .catch(this.handleError);


    }*/


    goUnion(Putno:PutnoObject, Nosilac:Nosilac, Stambeno:StambenoObject, Put:PutObject, NizNosioci:NizNosioci ) 
    {

        let urla = '/api/insurance/Union';

        let a = {

            insurance:Putno,
            nosilac:Nosilac,
            nizNosioci:NizNosioci,
            putInsurance:Put,
            stambenoInsurance:Stambeno

        }

        return this._http.post(urla, JSON.stringify(a), {headers : this.headers })
        .toPromise()
       // .then(res => res.json() as PutnoObject)
        .catch(this.handleError);



    }
   

  goContact(kontakt:Contact) {

    let urlk = '/api/insurance/kontakt';

  return this._http.post(urlk, JSON.stringify(kontakt), {headers : this.headers })
  .toPromise()
  .catch(this.handleError);

  }


  goAscquierUnion(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any) : Promise<ResponseObjekat>{

    let urlb = '/api/insurance/Ascquier';

    let b = {
      insurance:Putno,
      nosilac:Nosilac,
      nizNosioci:Nosioci,
      putInsurance:Put,
      stambenoInsurance:Stambeno



  };


  return this._http.post(urlb, JSON.stringify(b), {headers : this.headers })
  .toPromise()
  .then(response => response.json() as ResponseObjekat)
  .catch(this.handleError);
  //.toPromise()
  //.map(success => success.status)
  //.then(res => res.json() as PutnoObject)
  //.catch(this.handleError);
  
  }


  goPayPalUnion(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any): Promise<ResponseObjekat> {
    
        let urlc = '/api/insurance/PayPal';
    
        let c = {
          insurance:Putno,
          nosilac:Nosilac,
          nizNosioci:Nosioci,
          putInsurance:Put,
          stambenoInsurance:Stambeno

    
    
      };
    
    
      return this._http.post(urlc, JSON.stringify(c), {headers : this.headers })
      .toPromise()
      .then(response => response.json() as ResponseObjekat)
      .catch(this.handleError);
      //.toPromise()
     // .map(success => success.status)
      //.then(res => res.json() as PutnoObject)
     // .catch(this.handleError);
      
      }


  goPOSUnion(Nosilac:Nosilac, Nosioci:NizNosioci, Put:any, Putno:any, Stambeno:any): Promise<ResponseObjekat> {
    
        let urld = '/api/insurance/POS';
    
        let d = {
          insurance:Putno,
          nosilac:Nosilac,
          nizNosioci:Nosioci,
          putInsurance:Put,
          stambenoInsurance:Stambeno

    
      };
    
    
      return this._http.post(urld, JSON.stringify(d), {headers : this.headers })
      .toPromise()
      .then(response => response.json() as ResponseObjekat)
      .catch(this.handleError);
      //.toPromise()
      //.map(success => success.status)
      //.then(res => res.json() as PutnoObject)
      //.catch(this.handleError);
      
      }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
//}
/*private handleError (error: any): Promise<any> {
console.error(error.message || error);
//return Observable.throw(error.status);
return Promise.reject(error.message || error);
}*/

}
