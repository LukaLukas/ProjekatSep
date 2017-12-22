import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-stambeno-insurance',
  templateUrl: './buy-stambeno-insurance.component.html',
  styleUrls: ['./buy-stambeno-insurance.component.css']
})
export class BuyStambenoInsuranceComponent implements OnInit {



  @Input() valueObjekatStambeno;
  
  constructor() { }

  ngOnInit() {
  }

}
