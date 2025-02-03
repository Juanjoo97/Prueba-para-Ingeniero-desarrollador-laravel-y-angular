import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../service/cita.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-agendar-cita',
    templateUrl: './agendar-cita.component.html',
    styleUrls: ['./agendar-cita.component.scss'],
    imports: [CommonModule, ReactiveFormsModule]

})
export class AgendarCitaComponent implements OnInit {
    citaForm!: FormGroup;
    medicos: any[] = [];
    public isLoading: boolean = true;
    constructor(private citaService: CitaService, private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.citaService.getMedicos().subscribe({
            next: (data) => {
                this.medicos = data;
                this.isLoading = false;
            },
            error: (error) => {
                console.log(error)
                this.isLoading = false;
            }
        });

        this.citaForm = this.fb.group({
            medico: ['', Validators.required],
            fecha: ['', Validators.required],
            hora: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.citaForm.valid) {
            const formValue = {
                ...this.citaForm.value,
                estudiante_id: 1,
                medico_id: +this.citaForm.value.medico,
                estado: 1
            };
            console.log('Formulario enviado:', formValue);
            this.citaService.agendarCita(formValue).subscribe(response => {
                alert('Cita agendada correctamente');
            });
        } else {
            console.log('Formulario no válido');
        }
    }

    goBack(): void {
        this.router.navigate(['/home']);
    }
}