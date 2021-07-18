import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { JwtInterceptor } from './authentification/jwt.interceptor';
import { ReceptionComponent } from './reception/reception.component';
import { UpdatePComponent } from './reception/update-p/update-p.component';
import { MedecinComponent } from './medecin/medecin.component';
import { UpdateMedComponent } from './medecin/update-med/update-med.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { UpdateInfComponent } from './infirmier/update-inf/update-inf.component';
import { RadiologueComponent } from './radiologue/radiologue.component';
import { UpdateRadioComponent } from './radiologue/update-radio/update-radio.component';
import { BilologisteComponent } from './bilologiste/bilologiste.component';
import { UpdateBioComponent } from './bilologiste/update-bio/update-bio.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { UpdateMedicamentComponent } from './pharmacien/update-medicament/update-medicament.component';
import { ChefServiceComponent } from './chef-service/chef-service.component';
import { UpdatePersonelComponent } from './chef-service/update-personel/update-personel.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ReceptionComponent,
    UpdatePComponent,
    MedecinComponent,
    UpdateMedComponent,
    InfirmierComponent,
    UpdateInfComponent,
    RadiologueComponent,
    UpdateRadioComponent,
    BilologisteComponent,
    UpdateBioComponent,
    PharmacienComponent,
    UpdateMedicamentComponent,
    ChefServiceComponent,
    UpdatePersonelComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
