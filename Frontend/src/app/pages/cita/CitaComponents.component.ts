import { Component, OnInit } from '@angular/core';
import { GetCitaService } from '../../../service/hello-world.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apihelloworld',
  templateUrl: './CitaComponents.component.html',
  styleUrls: ['./CitaComponents.component.scss'],
  imports: [CommonModule]
})
export class CitaComponents implements OnInit {
  citas: any[] = [];

  constructor(private getCitaService: GetCitaService, private router: Router) { }

  ngOnInit() {
    this.getCitaService.getCitaMessage().subscribe((data) => {
      this.citas = data;
      console.log(this.citas);
    });
  }

  onSubmit(): void {
    this.router.navigate(['/citas']);
  }

  onSubmit2(): void {
    this.router.navigate(['/agendar']);
  }
}