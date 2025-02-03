import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private apiUrl = 'http://localhost:8000/api'; // URL de la API Laravel

  constructor(private http: HttpClient) {}

  getMedicos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/medicos`);
  }

  agendarCita(cita: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/citas`, cita);
  }

  getCitasEstudiante(estudianteId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/citas/estudiante/${estudianteId}`);
  }

  cancelarCita(citaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/citas/${citaId}`);
  }
}