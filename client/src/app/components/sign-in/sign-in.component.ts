import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

	switch_login() {
		document.querySelector('.form-login').classList.add('active');
		document.querySelector('.form-sign-up').classList.remove('active');
	} 

	switch_sign_up() {		
		document.querySelector('.form-sign-up').classList.add('active');
		document.querySelector('.form-login').classList.remove('active');		
	}
}
