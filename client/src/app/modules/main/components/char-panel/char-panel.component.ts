import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-panel',
  templateUrl: './char-panel.component.html',
  styleUrls: ['./char-panel.component.css']
})
export class CharPanelComponent implements OnInit {
	public items = [
		{
			iconUrl: '/assets/img/icon/v-lover logo.png',
			quantity: 1,
			description: 'abc',
			
		},
		{
			iconUrl: '/assets/img/icon/v-lover logo.png',
			quantity: 1,
			description: 'abc',
			
		},
		{
			iconUrl: '/assets/img/icon/v-lover logo.png',
			quantity: 1,
			description: 'abc',
			
		},
		{
			iconUrl: '/assets/img/icon/v-lover logo.png',
			quantity: 1,
			description: 'abc',			
		},
	];

	public buttons = [
		{
			id: 'working',
			label: 'Working',
			method: this.method_1
		},
		{
			id: 'restaurant',
			label: 'Restaurant',
			method: this.method_1
		},
		{
			id: 'hotel',
			label: 'Hotel',
			method: this.method_1
		},
		{
			id: 'playground',
			label: 'Playground',
			method: this.method_1
		},
		{
			id: 'hospital',
			label: 'Hospital',
			method: this.method_1
		}, 		
		{
			id: 'gym',
			label: 'Gym',
			method: this.method_1
		},		
		{
			id: 'plaza',
			label: 'Plaza',
			method: this.method_1
		},
		{
			id: 'spa',
			label: 'Spa',
			method: this.method_1
		},
		{
			id: 'salon',
			label: 'Salon',
			method: this.method_1
		}, 		
		{
			id: 'proposal',
			label: 'Proposal',
			method: this.method_1
		},
	]

	public stat_list = [
		{
			key: 'Name',
			value: 'Darklord'
		},
		{
			key: 'Game time',
			value: `25(days)`
		},
		{
			key: 'Money',
			value: `1000$`
		},
		{
			key: 'Job',
			value: 'Grab Driver'
		},
		{
			key: 'Appetite',
			value: `80/100`
		},
		{
			key: 'Rating',
			value: '15'
		},
		{
			key: 'Love',
			value: `40/1000`
		}
	]

  constructor() { }

  ngOnInit() {
  }

  method_1() {
  	console.log('method 1 is called');
  }

  activeTab(event) {  	
  	var tabLinks = document.getElementsByClassName('tab-3')
  	for (var i = 0; i < tabLinks.length; i++) {
	    tabLinks[i].className = tabLinks[i].className.replace("active", "");	    
	  }	  
	  event.currentTarget.className += " active";	  
  }

  tabSwitch(tabId) {
  	var i;
  	var container = document.querySelector('.char-container') 
  	var tabHide = document.getElementsByClassName("tab--hide");
	 	for (i = 0; i < container.childElementCount; i++) {
	    container.children[i].classList.add("tab--hide");
	  }
	  document.getElementById(tabId).classList.remove("tab--hide");
  }  
}
