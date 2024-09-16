import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}
  private latitude: number | any;
  private longitude: number | any;

  public async ngOnInit() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    // this.longitude = 106.86008819340901;
    // this.latitude = -6.125417449443821;
    const map = new Map({
      basemap: "topo-vector"
    });
    const view = new MapView({
      container: "container",
      map: map,
      zoom: 14,
      center: [this.longitude, this.latitude]
    });
  }

}
