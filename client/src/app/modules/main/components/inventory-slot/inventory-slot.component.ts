import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-inventory-slot',
  templateUrl: './inventory-slot.component.html',
  styleUrls: ['./inventory-slot.component.css']
})
export class InventorySlotComponent implements OnInit {
	@Input('itemIconUrl') itemIconUrl: string;
	

  constructor() { }

  ngOnInit() {
  }

}
