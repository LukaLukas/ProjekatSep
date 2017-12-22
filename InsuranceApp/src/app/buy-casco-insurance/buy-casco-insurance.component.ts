import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-buy-casco-insurance',
  templateUrl: './buy-casco-insurance.component.html',
  styleUrls: ['./buy-casco-insurance.component.css']
})
export class BuyCascoInsuranceComponent implements OnInit {



  @Input() valueObjekatPut;

  constructor() { }

  ngOnInit() {
  }

}
