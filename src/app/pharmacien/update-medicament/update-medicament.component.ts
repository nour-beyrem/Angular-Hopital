import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { PharmacienService } from '../pharmacien.service';

@Component({
  selector: 'app-update-medicament',
  templateUrl: './update-medicament.component.html',
  styleUrls: ['./update-medicament.component.css']
})
export class UpdateMedicamentComponent implements OnInit {

  
  id:string="";
  medicamentAdd :any

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private medicament:PharmacienService, private userService : UserAuthService) { }

  ngOnInit(): void {
   
    
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      
      });
    this.medicamentAdd=this.getById(this.id);
    console.log('id',this.medicamentAdd)
  }

  getById(code:any){
    this.medicament.getMedicament(code).subscribe(data=>{
      this.medicamentAdd= data;
    });
  }
  


  updateMedicament(patiente:any,code:any){
    this.medicament.updateMedicament(patiente,code).subscribe(data=>{this.medicamentAdd=data})

  }

  processForm(){
    
    
    this.medicament.updateMedicament(this.medicamentAdd.id,this.medicamentAdd).subscribe(
      (medicaments)=>{
        this.toaster.success(
          `medicament a été modifier avec succès`
        );
        this.router.navigate(['pharmacien']);
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
    this.router.navigate(['pharmacien']);
  }

}
