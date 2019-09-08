import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-panel',
  templateUrl: './log-panel.component.html',
  styleUrls: ['./log-panel.component.css']
})
export class LogPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeTab(event) {  	
  	var tabLinks = document.getElementsByClassName('tab-1')
  	for (var i = 0; i < tabLinks.length; i++) {
	    tabLinks[i].className = tabLinks[i].className.replace("active", "");
	    console.log(tabLinks[i].className);
	  }	  
	  event.currentTarget.className += " active";	  
  } 

  tabSwitch(tabId) {
    var i;
    var container = document.querySelector('.lover-container') 
    var tabHide = document.getElementsByClassName("tab--hide");
    for (i = 0; i < container.childElementCount; i++) {
      container.children[i].classList.add("tab--hide");
    }
    document.getElementById(tabId).classList.remove("tab--hide");
  }  
}
