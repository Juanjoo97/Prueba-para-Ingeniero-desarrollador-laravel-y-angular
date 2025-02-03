import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../service/cita.service';
import { CommonModule, Location } from '@angular/common';

@Component({
    selector: 'app-agendar-cita',
    templateUrl: './agendar-cita.component.html',
    styleUrls: ['./agendar-cita.component.scss'],
    imports: [CommonModule]

})
export class AgendarCitaComponent implements OnInit {
    medicos: any[] = [];
    cita: any = {
        estudiante_id: 1, // Suponiendo que el estudiante con ID 1 está logueado
        medico_id: '',
        fecha: '',
        hora: '',
        estado: 'agendada'
    };

    constructor(private citaService: CitaService, private location: Location) { }

    ngOnInit(): void {
        this.citaService.getMedicos().subscribe(data => {
            this.medicos = data;
            console.log(this.medicos)
        });
    }

    onSubmit(): void {
        this.citaService.agendarCita(this.cita).subscribe(response => {
            alert('Cita agendada correctamente');
        });
    }

    goBack(): void {
        this.location.back();
    }
}