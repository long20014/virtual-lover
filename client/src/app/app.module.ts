import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { MainModule } from './modules/main/main.module';

import { AppRoutes } from './app.routes';


import { AppComponent } from './app.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    HomeComponent,
    NavigatorComponent,
    SignInComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,   
    MainModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
