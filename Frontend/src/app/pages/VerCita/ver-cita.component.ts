import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../service/cita.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
}
@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.component.html',
  styleUrls: ['./ver-cita.component.scss'],
  imports: [CommonModule],
})
export class VerCitasComponent implements OnInit {
  citas: any[] = [];
  public isLoading: boolean = true;
  medicos: Medico[] = [];
  constructor(private citaService: CitaService, private router: Router) { }

  ngOnInit(): void {
    const estudianteId = 1;
    this.citaService.getCitasEstudiante(estudianteId).subscribe({
      next: (data) => {
        this.citas = data;
        console.log(this.citas)
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
      }
    })
    this.citaService.getMedicos().subscribe({
      next: (data) => {
        this.medicos = data;
        console.log(this.medicos)
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error)
        this.isLoading = false;
      }
    });
  }
  // Método para obtener el médico por su id
  getMedicoById(medicoId: number) {
    return this.medicos.find(medico => medico.id === medicoId);
  }
  cancelarCita(citaId: number): void {
    this.citaService.cancelarCita(citaId).subscribe(response => {
      alert('Cita cancelada correctamente');
      this.citas = this.citas.filter(c => c.id !== citaId);
    });
  }

  goBack(): void {
    // this.location.back();
    this.router.navigate(['/home']);

  }
}