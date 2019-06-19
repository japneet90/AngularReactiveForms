import { Component } from '@angular/core';

// Must import to use Forms functionality
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  myReactiveForm: FormGroup;
  FullName: string = '';
  Address: string = '';
  DOB: Date = null;
  Gender: string = '';
  Interests: string = '';
  Email: string = '';
  IsAccepted: number = 0;
  showForm: boolean = true;

  formErrors = {
    FullName: '',
    Address: '',
    DOB: '',
    Gender: '',
    Interests: '',
    Email: ''
  };

  constructor(public form: FormBuilder) {
    // To initialize FormGroup
    this.initializeForm();
  }

  initializeForm() {
    this.myReactiveForm = this.form.group({
      'FullName': [null, [Validators.required]],
      'Address': [null, Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(500)])],
      'DOB': [null, Validators.required],
      'Gender': [null, Validators.required],
      'Interests': [null, Validators.required],
      'Email': [null, Validators.compose([Validators.required, Validators.email])],
      'IsAccepted': [null]
    });
  }

  // On Change event of Toggle Button
  onChange(event: any) {
    if (event.checked == true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  onFormSubmit() {
    this.markFormAsTouched();
  }

  markFormAsTouched() {
    let objectValues = ((obj) => { return Object.keys(obj).map(e => obj[e]); })
    objectValues(this.myReactiveForm.controls).forEach(control => {
      control.markAsTouched();
    })
  }
}
