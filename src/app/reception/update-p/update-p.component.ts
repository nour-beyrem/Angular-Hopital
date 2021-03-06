import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { USER } from 'src/app/model/user';
import { ReceptionService } from '../reception.service';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.css']
})
export class UpdatePComponent implements OnInit {

 
  med:string="medecin"
  inf:string="infirmier"
  id:string="";
  patientAdd :any

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private patient:ReceptionService, private userService : UserAuthService) { }

  ngOnInit(): void {
   
    
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      
      });
    this.patientAdd=this.getById(this.id);
    console.log('id',this.patientAdd)
  }

  getById(code:any){
    this.patient.getPatient(code).subscribe(data=>{
      this.patientAdd= data;
    });
  }
  


  updatecommande(patiente:any,code:any){
    this.patient.updatePatient(patiente,code).subscribe(data=>{this.patientAdd=data})

  }

  processForm(){
    
    
    this.patient.updatePatient(this.patientAdd.id,this.patientAdd).subscribe(
      (patiente)=>{
        this.toaster.success(
          `patient a été modifier avec succès`
        );
        this.router.navigate(['reception']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
  Annuler(){
    this.router.navigate(['reception']);
  }
}
