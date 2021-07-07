import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { ReceptionService } from '../reception/reception.service';

@Component({
  selector: 'app-bilologiste',
  templateUrl: './bilologiste.component.html',
  styleUrls: ['./bilologiste.component.css']
})
export class BilologisteComponent implements OnInit {

  username:any
  patients:any 
  non:string ="";

  constructor(private patient:ReceptionService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {
    this.username=this.token.getInfos().username;

   

    this.patient.getPatients().subscribe((result:any)=>{
      console.log(result)
      this.patients=result
    },
    (error)=>{
     alert('error')
    }
    
    )
  }

  deletePatient(Pat:any) {
    this.patient.deletePatient(Pat).subscribe( 
      (data)=>{
        this.toaster.error(`Le patient a été supprimé avec succès`);
    
    });
    
  
  }

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }
}
