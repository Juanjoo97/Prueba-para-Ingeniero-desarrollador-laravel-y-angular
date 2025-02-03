import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AgendarCitaComponent } from './pages/AgendaCita/agendar-cita.component';
import { CitaComponents } from './pages/cita/CitaComponents.component';
import { VerCitasComponent } from './pages/VerCita/ver-cita.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Aquí estamos configurando las rutas
    AppComponent,
    AgendarCitaComponent,
    CitaComponents,
    VerCitasComponent
  ],
  providers: [],
})
export class AppModule { }