import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { D3Service, D3, Selection } from 'd3-ng2-service'; // <-- import the D3 Service, the type alias for the d3 variable and the Selection interface
import { Satellite } from '../satellite.model';
import { SatelliteService } from '../satellite.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-d3output',
  templateUrl: './d3output.component.html',
  styleUrls: ['./d3output.component.css'],
  providers: [SatelliteService]
})
export class D3outputComponent implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  satToDisplay: any;

  constructor(element: ElementRef, d3Service: D3Service,
              private router: Router,
              private database: AngularFireDatabase,
              private satelliteService: SatelliteService) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
  }

  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    // this.satToDisplay = this.satelliteService.getSatelliteById('0');
    // this.satelliteService.getSatelliteById('0').subscribe(dataLastEmittedFromObserver => {
    //   this.satToDisplay = dataLastEmittedFromObserver;
    // })
  }

}
