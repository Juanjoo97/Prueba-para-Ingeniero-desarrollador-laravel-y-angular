import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../service/cita.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.component.html',
  styleUrls: ['./ver-cita.component.scss']
})
export class VerCitasComponent implements OnInit {
  citas: any[] = [];

  constructor(private citaService: CitaService, private location: Location) { }

  ngOnInit(): void {
    const estudianteId = 1; // Suponiendo que el estudiante con ID 1 está logueado
    this.citaService.getCitasEstudiante(estudianteId).subscribe(data => {
      this.citas = data;
    });
  }

  cancelarCita(citaId: number): void {
    this.citaService.cancelarCita(citaId).subscribe(response => {
      alert('Cita cancelada correctamente');
      this.citas = this.citas.filter(c => c.id !== citaId);
    });
  }

  goBack(): void {
    this.location.back();
  }
}