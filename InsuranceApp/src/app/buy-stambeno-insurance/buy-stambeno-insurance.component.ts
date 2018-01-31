import { Component, OnInit, Input } from '@angular/core';
import {StavkaOsiguranja} from '../stavka-osiguranja';

import {ServisObjectService} from '../servis-object.service';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-buy-stambeno-insurance',
  templateUrl: './buy-stambeno-insurance.component.html',
  styleUrls: ['./buy-stambeno-insurance.component.css']
})
export class BuyStambenoInsuranceComponent implements OnInit {



  @Input() valueObjekatStambeno;




  sadrzaj3:StavkaOsiguranja[];
  povrsine;
  starosti
  procenjene;
  osiguravanje;
  

  selectedPovrsina;
  selectedStarost;
  selectedProcena;
  selectedOsigu;


  setNewPovrsina(vr:string) {

      this.selectedPovrsina = vr;
      console.log(this.selectedPovrsina);

  }

  setNewStarost(vr2:string) {

      this.selectedStarost = vr2;
      console.log(this.selectedStarost);

  }

  setNewProcena(vr3:string) {

      this.selectedProcena = vr3;
      console.log(this.selectedProcena);

  }

  setNewOsiguravanje(vr4:string) {

        this.selectedOsigu = vr4;
        console.log(this.selectedOsigu);
  }
  

  
  close2() {

    document.getElementById('id01').style.display='none';

  }

  save2(val1, val6, val7, val8) {

    this.valueObjekatStambeno.trajanjeOsiguranja = val1.value;
    this.valueObjekatStambeno.povrsinaStana = this.selectedPovrsina;
    this.valueObjekatStambeno.starostStana = this.selectedStarost;
    this.valueObjekatStambeno.procenaVrednostiStana = this.selectedProcena;
    this.valueObjekatStambeno.osiguranjeOd = this.selectedOsigu;
    this.valueObjekatStambeno.adresaVlasnika = val6.value;
    this.valueObjekatStambeno.imePrezimeVlasnika = val7.value;
    this.valueObjekatStambeno.jmbgVlasnika = val8.value;
    this.valueObjekatStambeno.pokazivac = true;
    console.log(this.valueObjekatStambeno.adresaVlasnika);
    document.getElementById('id01').style.display='none';

  }

  constructor(private serv2:HttpServiceService) { }

  ngOnInit() {

    this.selectedOsigu = '';
    this.selectedPovrsina = '';
    this.selectedProcena = '';
    this.selectedStarost = '';


    this.serv2.getStambenoBaza()
    .then(stambenoBaza => {this.sadrzaj3 = stambenoBaza;
                            this.ucitajStambeno(this.sadrzaj3);    
    })




  }


  ucitajStambeno(nizStavkeOsiguranja: StavkaOsiguranja[]) {
    const povrsi = [];
    const staro = [];
    const proce = [];
    const osi = [];
    
    nizStavkeOsiguranja.forEach(function (stavka) {
      if (stavka.naziv === 'povrsina') {
        stavka.vrednosti.forEach(function (vrednostStavke){
         povrsi.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });                     
      } else if (stavka.naziv === 'starost_stana') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          staro.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });                     
      } else if (stavka.naziv === 'procenjena_vrednost') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          proce.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      } else if (stavka.naziv === 'osigurava_se_od') {
        stavka.vrednosti.forEach(function (vrednostStavke) {
          osi.push({ label: vrednostStavke.vrednost, value: vrednostStavke.sifra});
        });
      }

      
      
    });
    this.povrsine = povrsi;
    this.starosti = staro;
    this.procenjene = proce;
    this.osiguravanje = osi;

    this.selectedOsigu = this.osiguravanje[0].value;
    this.selectedPovrsina = this.povrsine[0].value;
    this.selectedProcena = this.procenjene[0].value;
    this.selectedStarost = this.starosti[0].value;



    
  }




}
