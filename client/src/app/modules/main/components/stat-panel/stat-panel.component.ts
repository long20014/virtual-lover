import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-panel',
  templateUrl: './stat-panel.component.html',
  styleUrls: ['./stat-panel.component.css']
})
export class StatPanelComponent implements OnInit {

  public main_stats = [
    {
      key: 'Name' ,
      value: 'Akai Hasu'
    },
    {
      key: 'Age' ,
      value: `151/3600 (days)`
    },
    {
      key: 'Health',
      value: `100/100`
    },
    {
      key: 'Happiness',
      value: `90/100`
    },
    {
      key: 'Appetite',
      value: `80/100`
    },
    {
      key: 'Rating',
      value: `15`
    },
    {
      key: 'Love rating',
      value: `40/1000`
    }
  ]

  public rating_stats = [
    {
      key: 'Measurement',
      value: `95/61/93(cm)`
    },
    {
      key: 'Weight',
      value: `48(kg)`
    },
    {
      key: 'Height',
      value: `167(cm)`
    },
    {
      key: 'Beauty',
      value: `83/100`
    },
    {
      key: 'Education',
      value: `Doctor`
    },
    {
      key: 'Job',
      value: `Doctor`
    },
    {
      key: 'family',
      value: `77/100`
    }
  ]

  public other_stats = [
    {
      key: 'Personality',
      value: `Humorous`
    },
    {
      key: 'Hobby',
      value: `Listen to music`
    },
    {
      key: 'Love',
      value: `Chocolate`
    },
    {
      key: 'Hate',
      value: `Spicy food`
    },
    {
      key: 'Friends',
      value: `75/100`
    },
    {
      key: 'Families',
      value: `66/100`
    },
    {
      key: 'Social',
      value: `77/100`
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  activeTab(event) {  	
  	var tabLinks = document.getElementsByClassName('tab-2')
  	for (var i = 0; i < tabLinks.length; i++) {
	    tabLinks[i].className = tabLinks[i].className.replace("active", "");
	    console.log(tabLinks[i].className);
	  }	  
	  event.currentTarget.className += " active";	  
  } 

  tabSwitch(tabId) {
    var i;
    var container = document.querySelector('.stat-container') 
    var tabHide = document.getElementsByClassName("tab--hide");
    for (i = 0; i < container.childElementCount; i++) {
      container.children[i].classList.add("tab--hide");
    }
    document.getElementById(tabId).classList.remove("tab--hide");
  }  
}
