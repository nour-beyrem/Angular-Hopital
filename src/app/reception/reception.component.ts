import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { ReceptionService } from './reception.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {


  patients:any 
  id:string="";
  auth:any;
  role :string="rece"
  user:any
  username:any
  constructor(private patient:ReceptionService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      
      });
     
    this.auth=this.userService.getbyid(this.auth,this.id);
    this.username=this.token.getInfos().username
    this.role=this.auth.role;
    console.log('id',this.token.getInfos().username)

 this.user= this.userService.getbyid(this.user,this.id);
 
    this.patient.getPatients().subscribe((result:any)=>{
      console.log(result)
      this.patients=result
    },
    (error)=>{
     alert('error')
    }
    
    )
   
    
  }

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

}
