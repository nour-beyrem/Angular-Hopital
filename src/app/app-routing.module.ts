import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { BilologisteComponent } from './bilologiste/bilologiste.component';
import { UpdateBioComponent } from './bilologiste/update-bio/update-bio.component';
import { ChefServiceComponent } from './chef-service/chef-service.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { UpdateInfComponent } from './infirmier/update-inf/update-inf.component';
import { MedecinComponent } from './medecin/medecin.component';
import { UpdateMedComponent } from './medecin/update-med/update-med.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { UpdateMedicamentComponent } from './pharmacien/update-medicament/update-medicament.component';
import { RadiologueComponent } from './radiologue/radiologue.component';
import { UpdateRadioComponent } from './radiologue/update-radio/update-radio.component';

import { ReceptionComponent } from './reception/reception.component';
import { UpdatePComponent } from './reception/update-p/update-p.component';

const routes: Routes = [

  {path: '', component: AuthComponent},
  {path: 'reception', component: ReceptionComponent},
  {path:'updateReception/:id',component:UpdatePComponent},
  {path: 'medecin', component: MedecinComponent},
  {path:'updateMedecin/:id',component:UpdateMedComponent},
  {path: 'infirmier', component: InfirmierComponent},
  {path:'updateInfirmier/:id',component:UpdateInfComponent},
  {path: 'radiologue', component: RadiologueComponent},
  {path:'updateRadiologue/:id',component:UpdateRadioComponent},
  {path: 'biologiste', component: BilologisteComponent},
  {path:'updateBilogiste/:id',component:UpdateBioComponent},
  {path: 'pharmacien', component: PharmacienComponent},
  {path:'updateMedicament/:id',component:UpdateMedicamentComponent},
  {path: 'chefService', component: ChefServiceComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
