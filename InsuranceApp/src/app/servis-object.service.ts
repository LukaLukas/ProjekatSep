import { Injectable } from '@angular/core';
import {PutnoObject} from './putno-object';
import {StambenoObject} from './stambeno-object';
import {PutObject} from './put-object';
import {Nosilac} from './nosilac';
import {NizNosioci} from './niz-nosioci';
import {Contact} from './contact';
import {ProbaObject} from './proba-object';
import {Response} from './response';
import {BazaPodData} from './baza-pod-data';

import {BazaData} from './baza-data';
import {BazaNizData} from './baza-niz-data';

@Injectable()
export class ServisObjectService {

  PutnoObjekat:PutnoObject = new PutnoObject();
  StambenoObjekat:StambenoObject = new StambenoObject();
  PutObjekat:PutObject = new PutObject();
  NosilacObjekat:Nosilac = new Nosilac();
  NizNosiociObjekat: NizNosioci = new NizNosioci();
  ContactObjekat:Contact = new Contact();
  ProbaObjekat:ProbaObject = new ProbaObject();
  Odgovor:Response = new Response();
  bazaPodData:BazaPodData = new BazaPodData();
  bazaData:BazaData = new BazaData();
  bazaNizData:BazaNizData = new BazaNizData();
  valueCena:string = '';

  bazaPutno:BazaNizData = new BazaNizData();

  backValueCena() {

    this.valueCena = '';
  }


  backOdgovor() {

    this.Odgovor = new Response();                                                                
  }

  backBazaPodData() {

    this.bazaPodData = new BazaPodData();

  }

  backBazaData() {

    this.bazaData = new BazaData();
  }

  backBazaNizData() {

    this.bazaNizData = new BazaNizData();
  }


  backPutno() {

    this.PutnoObjekat = new PutnoObject();
  }

  backProba() {

    this.ProbaObjekat = new ProbaObject();
  }

  backContact() {
    this.ContactObjekat = new Contact();
  }

  backNizNosioci() {

    this.NizNosiociObjekat = new NizNosioci();
  }

  backPut() {
    
        this.PutObjekat = new PutObject();
      }

      
  backStambeno() {
    
        this.StambenoObjekat = new StambenoObject();
      }

  backNosilac() {

    this.NosilacObjekat = new Nosilac();
  }

  getValueCena() {

    return this.valueCena;
  }

  getBazaPodData() {

    return this.bazaPodData;
  }

  getBazaData() {

    return this.bazaData;
  }
    
getBazaNizData() {


  return this.bazaNizData;
}
  getObjectPutno () {

    return this.PutnoObjekat;
  }

  getOdgovor() {

    return this.Odgovor;
  }

  getContact() {

    return this.ContactObjekat;
  }

  getNizNosioci() {

    return this.NizNosiociObjekat;
  }

  getProbaObject() {

    return this.ProbaObjekat;
  }

  getNosilac() {

    return this.NosilacObjekat;
  }

  getObjectPut () {
    
        return this.PutObjekat;
      }

      getObjectStambeno () {
        
            return this.StambenoObjekat;
          }

  setValueCena(data) {

    this.valueCena = data;
  }

  setValuePutno(data) {

    this.PutnoObjekat = data;

  }

  setValueBazaData(data) {

    this.bazaData = data;
  }

  setValueBazaPodData(data) {

    this.bazaPodData = data;
  }

  setValueBazaNizData(data) {

    this.bazaNizData = data;
  }


  setOdgovor(data) {

     this.Odgovor = data;
  }

  setValueContact(data) {

    this.ContactObjekat = data;
  }

  setValueNizNosioci(data) {

    this.NizNosiociObjekat = data;
  }

  setValuePut(data) {
    
        this.PutObjekat = data;
    
      }

    setValueProba(data) {

      this.ProbaObjekat = data;
    }

    setValueNosilac(data) {

      this.NosilacObjekat = data;
    }
      
      setValueStambeno(data) {
        
            this.StambenoObjekat = data;
        
          }

  constructor() { }

}
