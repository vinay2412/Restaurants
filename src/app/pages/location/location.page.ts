import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {

  title: string = "My location ";
  lat: number = 12.918844;
  lng: number = 77.610877;
  zoom: number = 12;
 
}
