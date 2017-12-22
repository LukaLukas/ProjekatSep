import { Injectable } from '@angular/core';
import {PutnoObject} from './putno-object';
import {StambenoObject} from './stambeno-object';
import {PutObject} from './put-object';
import {Nosilac} from './nosilac';
import {NizNosioci} from './niz-nosioci';
import {Contact} from './contact';
@Injectable()
export class ServisObjectService {

  PutnoObjekat:PutnoObject = new PutnoObject();
  StambenoObjekat:StambenoObject = new StambenoObject();
  PutObjekat:PutObject = new PutObject();
  NosilacObjekat:Nosilac = new Nosilac();
  NizNosiociObjekat: NizNosioci = new NizNosioci();
  ContactObjekat:Contact = new Contact();

  backPutno() {

    this.PutnoObjekat = new PutnoObject();
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
    

  getObjectPutno () {

    return this.PutnoObjekat;
  }

  getContact() {

    return this.ContactObjekat;
  }

  getNizNosioci() {

    return this.NizNosiociObjekat;
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

  setValuePutno(data) {

    this.PutnoObjekat = data;

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

    setValueNosilac(data) {

      this.NosilacObjekat = data;
    }
      
      setValueStambeno(data) {
        
            this.StambenoObjekat = data;
        
          }

  constructor() { }

}
