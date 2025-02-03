import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CitaService } from '../../../service/cita.service';
interface Estudiante {
  id: number;
  nombre: string;
  correo: string;
  programa_academico: string;
}
@Component({
  selector: 'app-apihelloworld',
  templateUrl: './CitaComponents.component.html',
  styleUrls: ['./CitaComponents.component.scss'],
  imports: [CommonModule]
})
export class CitaComponents implements OnInit {
  citas: any[] = [];
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante | null = null;
  public isLoading: boolean = true;
  constructor(private citaService: CitaService, private router: Router) { }

  ngOnInit() {
    this.citaService.getEstudiantes().subscribe({
      next: (data) => {
        const estudianteId = 1;
        this.estudiantes = data.filter((estudiante: { id: number; }) => estudiante.id === estudianteId);
        console.log(this.estudiantes)
        if (this.estudiantes.length > 0) {
          this.estudiante = this.estudiantes[0];
        }

        this.isLoading = false;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    this.router.navigate(['/citas']);
  }

  onSubmit2(): void {
    this.router.navigate(['/agendar']);
  }
}