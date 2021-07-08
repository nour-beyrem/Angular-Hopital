import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacienService {

  patienturl="http://localhost:3000/medicament";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  

  getMedicaments(): Observable<any>{
    return this.httpClient.get(this.patienturl);
  }

  getMedicament(id: any): Observable<any> {
    return this.httpClient.get(`${this.patienturl}/${id}`);
  }

  createMedicament(data: any): Observable<any> {
    return this.httpClient.post(this.patienturl, data);
  }

  updateMedicament(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.patienturl}/${id}`, data);
  }

  deleteMedicament(id: any): Observable<any> {
    return this.httpClient.delete(`${this.patienturl}/${id}`);
  }

  

  
}
