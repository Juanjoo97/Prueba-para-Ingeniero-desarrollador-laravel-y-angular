import { Routes } from '@angular/router';
import { CitaComponents } from './pages/cita/CitaComponents.component';
import { AgendarCitaComponent } from './pages/AgendaCita/agendar-cita.component';
import { VerCitasComponent } from './pages/VerCita/ver-cita.component';

export const routes: Routes = [
    { path: 'agendar', component: AgendarCitaComponent },
    { path: 'home', component: CitaComponents },
    { path: 'citas', component: VerCitasComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },];

