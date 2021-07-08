import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { PharmacienService } from './pharmacien.service';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.component.html',
  styleUrls: ['./pharmacien.component.css']
})
export class PharmacienComponent implements OnInit {

  medicaments:any 
  id:string="";
  auth:any;
  role :string="rece"
  user:any
  username:any
 

  medicamentAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    nom: '',
    famille:'',

    
    forme: '',

    dci: '',

   
    indication: '',

    
    contreIndication: '',

  
    posologie: '',

  
    conservation: ''

   
  };
  submitted = false;
 
  constructor(private medicament:PharmacienService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      
      });
     
    
    this.username=this.token.getInfos().username

    

 this.user= this.userService.getbyid(this.user,this.id);
 
    this.medicament.getMedicaments().subscribe((result:any)=>{
      console.log(result)
      this.medicaments=result
    },
    (error)=>{
     alert('error')
    }
    
    )
   
    
  }


  createMedicament(): void {
    const data = {
      nom: this.medicamentAdd.nom,
      famille: this.medicamentAdd.famille,
      forme: this.medicamentAdd.forme,
     dci: this.medicamentAdd.dci,
     indication: this.medicamentAdd.indication,
     contreIndication: this.medicamentAdd.contreIndication,
     posologie: this.medicamentAdd.posologie,
     conservation: this.medicamentAdd.conservation,
      
    };

    this.medicament.createMedicament(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `medicament a été ajouté avec succès`
          
        );
        this.medicamentAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          id:'',
          nom: '',
          famille:'',

    
    forme: '',

    dci: '',

   
    indication: '',

    
    contreIndication: '',

  
    posologie: '',

  
    conservation: ''
          
        };
       
        this.submitted = true;
        
      },
      (error) => {
        console.log(error);
      });
      
}




Annuler(){
  this.medicamentAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    nom: '',
    famille:'',

    
    forme: '',

    dci: '',

   
    indication: '',

    
    contreIndication: '',

  
    posologie: '',

  
    conservation: ''
    
  };
}


deleteMedicament(Med:any) {
  this.medicament.deleteMedicament(Med).subscribe( 
    (data)=>{
      this.toaster.error(`Le medicament a été supprimé avec succès`);
  
  });
  

}

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }


}
