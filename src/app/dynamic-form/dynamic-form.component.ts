// Import necessary modules and components from Angular core and custom services
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '../../service/form-builder.service';
import { FormField } from 'src/assets/json';

// Component decorator to define metadata for the component
@Component({
  // Selector used to embed the component in HTML
  selector: 'app-dynamic-form',
  // Template file for the component
  templateUrl: './dynamic-form.component.html',
  // Stylesheet file for the component
  styleUrls: ['./dynamic-form.component.scss'],
})
// Class declaration for the DynamicFormComponent
export class DynamicFormComponent implements OnInit {
  // FormGroup to represent the dynamic form
  form!: FormGroup;
  // Flag to track whether the form has been submitted
  submitted: boolean = true;
  // Variable to store form data
  formData: any;

  // Constructor with dependency injection for FormBuilderService
  constructor(private formBuilder: FormBuilderService) {}

  // Lifecycle hook called after the component is initialized
  ngOnInit(): void {
    // Build the form using the FormBuilderService and FormField data
    this.form = this.formBuilder.buildForm(FormField);
    // Set formData variable to the FormField data
    this.formData = FormField;
  }

  // Event handler for form submission
  onSubmit(): void {
    this.submitted = true;
    // Check if the form is invalid
    if (this.form.invalid) {
      this.submitted = false;
      return;
    } else {
      // Handle form submission - log the form values
      console.log(this.form.value);
    }
  }
}
