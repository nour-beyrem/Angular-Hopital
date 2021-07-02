import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  patienturl="http://localhost:3000/patient";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  

  getPatients(): Observable<any>{
    return this.httpClient.get(this.patienturl);
  }

  getPatient(id: any): Observable<any> {
    return this.httpClient.get(`${this.patienturl}/${id}`);
  }

  createPatient(data: any): Observable<any> {
    return this.httpClient.post(this.patienturl, data);
  }

  updatePatient(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${this.patienturl}/${id}`, data);
  }

  deletePatient(id: any): Observable<any> {
    return this.httpClient.delete(`${this.patienturl}/${id}`);
  }
  searchById(id: any): Observable<any> {
    return this.httpClient.get(`${this.patienturl}?name=${id}`);
  }
}
