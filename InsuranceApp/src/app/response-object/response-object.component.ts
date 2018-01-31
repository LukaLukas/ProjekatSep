import { Component, OnInit, Input  } from '@angular/core';
import {Router} from '@angular/router';

import {ServisObjectService} from '../servis-object.service';

@Component({
  selector: 'app-response-object',
  templateUrl: './response-object.component.html',
  styleUrls: ['./response-object.component.css']
})
export class ResponseObjectComponent implements OnInit {



  @Input() modelResponse;


  ugasi() {

    this.serv2.backNizNosioci();
    this.serv2.backNosilac();
    this.serv2.backPut();
    this.serv2.backPutno();
    this.serv2.backStambeno();

    document.getElementById('id3').style.display='none';

    this.route.navigate(['/InfoTrip']);


  }

  constructor(private route: Router, private serv2:ServisObjectService) { }

  ngOnInit() {
  }

}
