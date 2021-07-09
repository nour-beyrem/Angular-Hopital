import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { PersonelService } from 'src/app/chefService/personel.service';

@Component({
  selector: 'app-update-personel',
  templateUrl: './update-personel.component.html',
  styleUrls: ['./update-personel.component.css']
})
export class UpdatePersonelComponent implements OnInit {

 
  id:string="";
  personelAdd :any

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private personel:PersonelService, private userService : UserAuthService) { }

  ngOnInit(): void {
   
    
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params.id;
      
      });
    this.personelAdd=this.getById(this.id);
    console.log('id',this.personelAdd)
  }

  getById(code:any){
    this.personel.getUser(code).subscribe(data=>{
      this.personelAdd= data;
    });
  }
  


 

  processForm(){
    
    
    this.personel.updateUser(this.personelAdd.username,this.personelAdd).subscribe(
      (personele)=>{
        this.toaster.success(
          `personel a été modifier avec succès`
        );
        this.router.navigate(['chefService']);
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
    this.router.navigate(['chefService']);
  }

}
