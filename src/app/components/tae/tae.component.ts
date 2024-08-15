import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatError, MatLabel } from '@angular/material/form-field';
import { TaeService } from './tae.service';
import { MatIconModule } from '@angular/material/icon';
import { TaePayload, TaeResponse } from './tae.interfaces';
import { MatTooltip } from '@angular/material/tooltip';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-tae',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatIconModule,
    MatTooltip,
    MatButton,
    MatLabel,
    MatError,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [TaeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tae.component.html',
  styleUrl: './tae.component.scss',
})
export class TaeComponent {

  hide = signal(true);
  taeForm: FormGroup;
  testTae: TaePayload = {
    capital: 10000,
    gastosOrigen: 200,
    gastosPeriodicos: 60,
    periodo: 'MENSUAL',
    tin: 5,
    plazo: 5,
    tipoPlazo: 'ANUAL',
    hasTinPosterior: false,
    tinPosterior: 0,
    cambioTin: 0
  }
  tae: number = 0;

  constructor(private fb: FormBuilder, private taeService: TaeService) {
    this.taeForm = this.fb.group({
      capital: [null, Validators.required],
      gastosOrigen: [null],
      gastosPeriodicos: [null],
      periodo: [null, Validators.required],
      tin: [null, Validators.required],
      plazo: [null, Validators.required],
      tipoPlazo: ['', Validators.required],
      hasTinPosterior: [false],
      tinPosterior: [null],
      cambioTin: [null]
    });
  }

  sendFormTae(form: FormGroup) {
    console.log(form.value);

    this.taeService.postTaeForm(this.testTae).subscribe(({
      next: (value: TaeResponse) => {
        console.log(value);
        this.tae = value.tasa
      },
      error: (err) => {
        console.error(err);
      }
    }))
  }

}
