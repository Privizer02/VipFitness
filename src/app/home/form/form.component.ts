import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private route: Router) {}

  message = false;
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.required),
    hear: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (!this.form.valid) {
      alert('Please fill out all fields');
      return;
    } else {
      this.message = true;
    }
  }
}
