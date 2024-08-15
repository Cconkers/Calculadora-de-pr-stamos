import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TablaAmortizacionComponent } from './components/tabla-amortizacion/tabla-amortizacion.component';
import { FormularioPrestamoComponent } from './components/formulario-prestamo/formulario-prestamo.component';
import { TaeComponent } from './components/tae/tae.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TablaAmortizacionComponent,
    FormularioPrestamoComponent,
    TaeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculadora-prestamos';
}
