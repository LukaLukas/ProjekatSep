import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PutnoObject} from '../putno-object';
import {ServisObjectService} from '../servis-object.service';
import {HttpServiceService} from '../http-service.service';
import {BazaData} from '../baza-data';
import {BazaNizData} from '../baza-niz-data';
import {StavkaOsiguranja} from '../stavka-osiguranja';


@Component({
  selector: 'app-buy-trip-insurance',
  templateUrl: './buy-trip-insurance.component.html',
  styleUrls: ['./buy-trip-insurance.component.css']
})
export class BuyTripInsuranceComponent implements OnInit {


  //PutnoObjekat:PutnoObject = new PutnoObject();
  brojac:number = 0;

  modelVrednost = this.serv.getObjectPutno();

  constructor(private route: Router, private serv:ServisObjectService, private serv2:HttpServiceService) { }

  porodicno:boolean = false;
  dugmeDisabled = true;
  bazaProba:BazaData = new BazaData();
  bazaNizProba:BazaNizData = new BazaNizData();
  sadrzaj:StavkaOsiguranja[];
  errorMessage:any = '';
   region:Array<any> = [];
   regs ;
   starts ;
   sports;
   iznoss;
   selectedValue;
   selectedYouth;
   selectedIznos;
   selectedSport;
   checkBoxValue:boolean;     
   sport:boolean;

  changePorodicno(vrednost) {

    /*if (this.modelVrednost.vrstaPaketa == '1') {

      this.porodicno = false;
    }

    else {

      this.porodicno = true;
    }*/

    if (vrednost.value == 'Individualno') {

      this.porodicno = false;
    }

    else {

      this.porodicno = true;
    }

   // this.porodicno = !this.porodicno;

  }

  isValid() {

    return this.dugmeDisabled;

  }

  redirectValueCloseWithObject() {

      this.serv.backPutno();
      this.route.navigate(['/InfoTrip']);
  }

  redirectValueWithObject(value2, value3, value4) {

      console.log(this.selectedValue);

    // console.log(value1.value);
      console.log(value2.value);
      console.log(value3.value);
      console.log(value4.value);
      //console.log(value5.value);

      this.modelVrednost.destinacija = this.selectedValue;
      this.modelVrednost.uzrastLica = this.selectedYouth;
      this.modelVrednost.sport = this.selectedSport;
      this.modelVrednost.vrstaPaketa = value2.value;
      this.modelVrednost.pocetakOsiguranja = value3.value;
      this.modelVrednost.trajanjeOsiguranja = value4.value;
      this.modelVrednost.iznos = this.selectedIznos;

      if (this.modelVrednost.vrstaPaketa == 'Individualno') {

          this.modelVrednost.brojDece = null;
          this.modelVrednost.brojRoditelja = null;
          this.modelVrednost.sport = this.selectedSport;
          this.modelVrednost.brojac = 1;
      }

      else if (this.modelVrednost.vrstaPaketa == 'Porodicno') {

          this.modelVrednost.uzrastLica = null;
          this.modelVrednost.sport = '';
          this.modelVrednost.brojac = this.modelVrednost.brojDece+this.modelVrednost.brojRoditelja;
      }

      if ((this.modelVrednost.vrstaPaketa == 'Individualno' && this.modelVrednost.uzrastLica == '') || (this.modelVrednost.vrstaPaketa == 'Porodicno' && (this.modelVrednost.brojDece  == null || this.modelVrednost.brojRoditelja == null))   ) {

        this.route.navigate(['/BuyTrip']);


      } else {
 
      this.serv.setValuePutno(this.modelVrednost);
     
     
      


    this.route.navigate(['/CostInsuranceTrip']); }
  }

  log(x) {

    console.log(x);
  }

  log2(x) {
    
        console.log(x);
      }


  log3(x) {
    
       
        console.log(x);
      }

  nestoDaProbam(first, last, third) {

    console.log(first.value);
    console.log(last.value);
    console.log(third.value);

  }

  redirectHome() {
    
    
          this.route.navigate(['/']);
        }
    
        redirectValue(vrednost) {
    
          this.route.navigate(['/'+vrednost]);
          //console.log(this.PutnoObjekat.iznos);
    
        }

       
            
       setNewValue(vrednost:string) {

        this.selectedValue = vrednost;
        console.log(this.selectedValue);

       }

       setNewYouth(vrednost2:string) {

          this.selectedYouth = vrednost2;
        console.log(this.selectedYouth);
       }

       setNewIznos(vrednost3:string) {
          this.selectedIznos = vrednost3;

       }

       setNewSport(vrednost4:string) {

            this.selectedSport = vrednost4;
       }

      newFunction() {

          if (this.checkBoxValue == true) {

                this.sport = true;      
          }

          else {
            this.sport = false;
          }

      }

  ngOnInit() {

    this.selectedValue = '';
    this.selectedYouth = '';
    this.selectedIznos = '';
    this.selectedSport = '';
    this.checkBoxValue = false;
    this.sport = false;

    this.modelVrednost = this.serv.getObjectPutno();


   // this.serv2.izvuciPutno().then(data => this.bazaNizProba = data);

    this.serv2.getBeagleboards()
    .then(beagleboards => {this.sadrzaj = beagleboards;
                            this.ucitajPovrsinu(this.sadrzaj);    
    })



  }




  ucitajPovrsinu(nizStavkeOsiguranja: StavkaOsiguranja[]) {
    const povrsina = [];
    const starost = [];
    const procenjenaVrednost = [];
    const iznosDo = [];
    nizStavkeOsiguranja.forEach(function (stavka) {
      if (stavka.naziv === 'region') {
        stavka.vrednosti.forEach(function (vrednostStavke){
         povrsina.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'starost_osoba') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          starost.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'sport') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          procenjenaVrednost.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'iznos_do') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          iznosDo.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      }
    });
    this.regs = povrsina;
    this.starts = starost;
    this.sports = procenjenaVrednost;
    this.iznoss = iznosDo;
    this.selectedValue = this.regs[0].label;
    this.selectedYouth = this.starts[0].label;
    this.selectedIznos = this.iznoss[0].label;
    this.selectedSport = this.sports[0].label;
    console.log(this.selectedValue);
    console.log(this.selectedIznos);
    console.log(this.selectedYouth);
  }




}
