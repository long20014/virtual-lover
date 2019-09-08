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

  constructor() { }

  ngOnInit() {
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
