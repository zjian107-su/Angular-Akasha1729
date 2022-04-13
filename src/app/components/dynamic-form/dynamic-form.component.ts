import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';

//TODO: Review
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  userForm: FormGroup;
  roles = ['Admin', 'User'];
  dynamicFields: { [key: string]: string[] } = {
    Admin: ['Read', 'Write', 'Delete'],
    User: ['Read', 'Comment'],
  };

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      role: ['', Validators.required],
      permissions: new FormArray([], Validators.required),
    });
  }

  onRoleChange() {
    const role = this.userForm.get('role')!.value;
    const permissionsArray = this.userForm.get('permissions') as FormArray;

    // Clear previous permissions
    permissionsArray.clear();

    // Add new permissions based on the selected role
    if (role in this.dynamicFields) {
      this.dynamicFields[role].forEach((permission) => {
        permissionsArray.push(new FormControl(false));
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      console.log(formValues);
    }
  }
}
