import { Component } from '@angular/core';
import { forbiddenNameValidator } from 'src/app/validators/forbiddenNameValidator.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css'],
})
export class FormValidatorComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, forbiddenNameValidator(/Daniel/i)]],
    });
  }
}
