// Import necessary modules
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/model/FormField';

// Component decorator to define metadata for the component
@Component({
  // Selector used to embed the component in HTML
  selector: 'app-form-field',
  // Template file for the component
  templateUrl: './form-field.component.html',
  // Stylesheet file for the component
  styleUrls: ['./form-field.component.scss'],
})
// Class declaration for the FormFieldComponent
export class FormFieldComponent {
  // Input property to receive the field data from the parent component
  @Input() field!: FormField;
  // Input property to receive the form group from the parent component
  @Input() form!: FormGroup;
  // Input property to receive the submitted flag from the parent component
  @Input() submitted!: boolean;

  // Getter method to access the form controls
  get f() {
    return this.form.controls;
  }
}
