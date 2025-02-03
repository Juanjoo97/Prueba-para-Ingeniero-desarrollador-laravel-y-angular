import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCitaService {
  private apiUrl = 'http://localhost:8000/citas/estudiante/2'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  getCitaMessage(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}