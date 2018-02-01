import { Component, OnInit, Input  } from '@angular/core';
import {StavkaOsiguranja} from '../stavka-osiguranja';
import {ServisObjectService} from '../servis-object.service';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-buy-casco-insurance',
  templateUrl: './buy-casco-insurance.component.html',
  styleUrls: ['./buy-casco-insurance.component.css']
})



export class BuyCascoInsuranceComponent implements OnInit {



  @Input() valueObjekatPut;


  sadrzaj2:StavkaOsiguranja[];
  pakets;
  sleps;
  repairs;
  hotels;
  alts;

  selectedPackage;
  selectedSlep;
  selectedRep;
  selectedHot;
  selectedAl;


  close() {

    document.getElementById('id02').style.display='none'

  }

  save(val1, val2, val3,  val9, val10, val11, val12) {

    this.valueObjekatPut.imePrezimeVlasnik = val1.value;
    this.valueObjekatPut.jmbg = val2.value;
    this.valueObjekatPut.trajanjeOsiguranja =val3.value;
    this.valueObjekatPut.paketVrsta = this.selectedPackage;
    this.valueObjekatPut.kiloSlepovanja = this.selectedSlep;
    this.valueObjekatPut.cenaPopravke = this.selectedRep;
    this.valueObjekatPut.brojDanaHotel = this.selectedHot ;
    this.valueObjekatPut.altPrevoz = this.selectedAl;
    this.valueObjekatPut.markaTipVozila = val9.value;
    this.valueObjekatPut.godinaProizvodnje = val10.value;
    this.valueObjekatPut.tablicaBroj = val11.value;
    this.valueObjekatPut.brojSasije = val12.value;
    this.valueObjekatPut.pokazivac = true;
    console.log(this.valueObjekatPut.altPrevoz);
    document.getElementById('id02').style.display='none';

  }

  constructor(private serv2:HttpServiceService) { }


 

  ngOnInit() {

    this.selectedPackage = '';
    this.selectedSlep = '';
    this.selectedRep = '';
    this.selectedHot = '';
    this.selectedAl = '';



    this.serv2.getKaskoBaza()
    .then(kaskoBaza => {this.sadrzaj2 = kaskoBaza;
                            this.ucitajKasko(this.sadrzaj2);    
    })
  }


  setNewPak(vre:string) {
        this.selectedPackage = vre;
        console.log(this.selectedPackage);
  }

  setNewSlep(vre2:string) 
  {
      this.selectedSlep = vre2;
      console.log(this.selectedSlep);

  }

  setNewPop(vre3:string) {
      this.selectedRep = vre3;
      console.log(this.selectedPackage);
  }

  setNewHote(vre4:string) {

    this.selectedHot = vre4;
    console.log(this.selectedHot);
  }

  setNewAlt(vre5:string) {

    this.selectedAl = vre5;
    console.log(this.selectedAl);
  }


  ucitajKasko(nizStavkeOsiguranja: StavkaOsiguranja[]) {
    const paketi = [];
    const slepovanje = [];
    const popravke = [];
    const hoteli = [];
    const altovi = [];
    nizStavkeOsiguranja.forEach(function (stavka) {
      if (stavka.naziv === 'paket') {
        stavka.vrednosti.forEach(function (vrednostStavke){
         paketi.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'slepovanje') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          slepovanje.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'popravka') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          popravke.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'smestaj') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          hoteli.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      }

      else if (stavka.naziv === 'alt_prevoz') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          altovi.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      }
      
    });
    this.pakets = paketi;
    this.sleps = slepovanje;
    this.repairs = popravke;
    this.hotels = hoteli;
    this.alts = altovi;



    this.selectedPackage = this.pakets[0].label;
    this.selectedSlep = this.sleps[0].label;
    this.selectedRep = this.repairs[0].label;
    this.selectedHot = this.hotels[0].label;
    this.selectedAl = this.alts[0].label;



  }





}
