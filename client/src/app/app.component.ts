import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'virtual-lover';
  public navShow_app : boolean;  

  ngOnChanges() {
  }

  navShowHandler(value) {
  	this.navShow_app = value;
  } 
}
