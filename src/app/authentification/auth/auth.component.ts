
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {TokenService} from '../token.service';
import {AccountService} from '../account.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  });

  constructor(
    private authService: AuthService,
    private token: TokenService,
    private account: AccountService,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  signIn() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value)
      .subscribe(
        res => this.handleResponse(res),
        err => this.toastr.error
        (
          `Erreur`,
          'Merci de Vérifier votre email ou mot de passe !',
          {
            timeOut: 3000,
            positionClass: 'toast-bottom-left'
          }
        ))
  }

  handleResponse(data: any) {
    this.token.handle(data);
    this.account.changeAuthStatus(true);
    this.toastr.success(
      `Bienvenu : ${ this.token.getInfos().username }`,
      'Vous êtes connectés !',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }
    );
    
   if(data.user.role=="reception" ){
    this.router.navigate(['reception']);}
   else if(data.user.role=="medecin" ){
      this.router.navigate(['medecin']);}
    else if(data.user.role=="infirmier" ){
        this.router.navigate(['infirmier']);}
    else if(data.user.role=="radiologue" ){
          this.router.navigate(['radiologue']);}
     else if(data.user.role=="biologiste" ){
            this.router.navigate(['biologiste']);}
      else if(data.user.role=="pharmacien" ){
              this.router.navigate(['pharmacien']);}
      else if(data.user.role=="chefService" ){
                this.router.navigate(['chefService']);}
  
  }

}

