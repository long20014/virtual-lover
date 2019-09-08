import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-panel',
  templateUrl: './log-panel.component.html',
  styleUrls: ['./log-panel.component.css']
})
export class LogPanelComponent implements OnInit {

  public logs = [
    { 
      msg: `Game start...`, 
      status: 'warning'
    },
    {
      msg: `Your lover is hungry! (appetite 40/100)`, 
      status: 'alert'
    },
    { 
      msg: `You get your lover to a restaurant.`,
      status: 'action'
    },
    { 
      msg: `You call a beefsteak. (Money -200)`,
      status: 'action'
    },
    { 
      msg: `Your lover is full (Appetite +30, Happiness +3)`,
      status: 'info'  
    },    
    { 
      msg: `Your lover caught a fever! (Health -30, Happiness -4)`,
      status: 'alert'
    },
    { 
      msg: `You get your lover to a hospital.`,
      status: 'action' 
    },
    { 
      msg: `You order a well treatment. (Money -300)`,
      status: 'action' 
    },
    {
     msg: `Your lover is fine now. (Health +30, Happiness +2).`,
     status: 'info'
   },    
  ]

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
