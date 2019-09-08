import { RouterModule, Routes} from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './modules/main/components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';


export const AppRoutes : Routes = [
  /*{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'    
  } 
];