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


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ReceptionComponent,
    UpdatePComponent,

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
