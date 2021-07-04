import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { USER } from '../model/user';
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
  medecins: USER[] | undefined;
  infirmiers: USER[] | undefined;

  patientAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    age:'',
    prenom: '',
    nom: '',
    origine:'',
    statutSociale:'',
    profession:'',
    motifConsultation:'',
    signesActuels:'',
    natureUrgence:'',
    servicesAdmission:'',
    medecin:'',
    infirmier:'',
    systemeDeSoin:''
  };
  submitted = false;
  med:string="medecin"
  inf:string="infirmier"
  constructor(private patient:ReceptionService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {
    this.getbyrole(this.med);
    this.getbyrole1(this.inf);
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


  createPatient(): void {
    const data = {
      nom: this.patientAdd.nom,
      prenom: this.patientAdd.prenom,
      origine: this.patientAdd.origine,
      profession: this.patientAdd.profession,
      age: this.patientAdd.age,
      motifConsultation: this.patientAdd.motifConsultation,
      natureUrgence: this.patientAdd.natureUrgence,
      servicesAdmission: this.patientAdd.servicesAdmission,
      signesActuels: this.patientAdd.signesActuels,
      statutSociale: this.patientAdd.statutSociale,
      medecin: this.patientAdd.medecin,
      infirmier: this.patientAdd.infirmier,
      systemeDeSoin: this.patientAdd.systemeDeSoin,
    };

    this.patient.createPatient(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `patient a été ajouté avec succès`
          
        );
        this.patientAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          id:'',
          age:'',
          prenom: '',
          nom: '',
          origine:'',
          statutSociale:'',
          profession:'',
          motifConsultation:'',
          signesActuels:'',
          natureUrgence:'',
          servicesAdmission:'',
          medecin:'',
          infirmier:'',
          systemeDeSoin:''
        };
       
        this.submitted = true;
        
      },
      (error) => {
        console.log(error);
      });
      
}

getbyrole(test:string){
  this.userService.getbyrole(test).subscribe(data=>{
    this.medecins=data;
  
  });
}

getbyrole1(test:string){
  this.userService.getbyrole(test).subscribe(data=>{
    this.infirmiers=data;
   
  });
}


Annuler(){
  this.patientAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    age:'',
    prenom: '',
    nom: '',
    origine:'',
    statutSociale:'',
    profession:'',
    motifConsultation:'',
    signesActuels:'',
    natureUrgence:'',
    servicesAdmission:'',
    medecin:'',
    infirmier:'',
    systemeDeSoin:''
  };
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
