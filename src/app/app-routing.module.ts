import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';

import { ReceptionComponent } from './reception/reception.component';

const routes: Routes = [

  {path: '', component: AuthComponent},
  {path: 'reception', component: ReceptionComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
