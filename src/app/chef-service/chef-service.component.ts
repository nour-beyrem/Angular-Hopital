import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { PersonelService } from '../chefService/personel.service';

@Component({
  selector: 'app-chef-service',
  templateUrl: './chef-service.component.html',
  styleUrls: ['./chef-service.component.css']
})
export class ChefServiceComponent implements OnInit {

  personels:any 
  id:string="";
  auth:any;
  role :string="rece"
  user:any
  username:any
  
  personelAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    image:'',
    password:'',
    salt:'',
    username:''
   
  };
  submitted = false;
  
  constructor(private personel:PersonelService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
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
 
    this.personel.getUsers().subscribe((result:any)=>{
      console.log(result)
      this.personels=result
    },
    (error)=>{
     alert('error')
    }
    
    )
   
    
  }


  createPersonel(): void {
    const data = {
      username: this.personelAdd.username,
      nom: this.personelAdd.nom,
      prenom: this.personelAdd.prenom,
      sexe: this.personelAdd.sexe,
      cin: this.personelAdd.cin,
      role: this.personelAdd.role,
      adresse: this.personelAdd.adresse,
      email: this.personelAdd.email,
      image: this.personelAdd.image,
      password: this.personelAdd.password,
      salt: this.personelAdd.salt
      
    };

    this.personel.createUser(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `personel a été ajouté avec succès`
          
        );
        this.personelAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    image:'',
    password:'',
    salt:'',
    username:''
          
        };
       
        this.submitted = true;
        
      },
      (error) => {
        console.log(error);
      });
      
}




Annuler(){
  this.personelAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    image:'',
    password:'',
    salt:'',
    username:''
   
   
  };
}


deletePersonel(Pat:any) {
  this.personel.deleteUser(Pat).subscribe( 
    (data)=>{
      this.toaster.error(`personel a été supprimé avec succès`);
  
  });
  

}

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

}
