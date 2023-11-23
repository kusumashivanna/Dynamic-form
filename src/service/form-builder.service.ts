// Import necessary modules
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormField } from 'src/model/FormField';

// Injectable decorator
@Injectable({
  providedIn: 'root',
})
// Class declaration for the FormBuilderService
export class FormBuilderService {
  // Constructor with dependency injection for the FormBuilder
  constructor(private fb: FormBuilder) {}

  // Method to build a dynamic form based on the provided formData
  buildForm(formData: any): FormGroup {
    const formGroup: { [key: string]: any } = {};

    // Iterate through form sections and fields to create form controls
    formData.formFields?.forEach((section: any) => {
      section.fields.forEach((field: FormField) => {
        const validators = this.mapValidations(field.validations);

        // Initialize the form control based on the field type
        formGroup[field.name] = [
          field.type === 'checkbox' ? [true] : '',
          validators,
        ];
      });
    });

    // Create and return the form group using the FormBuilder
    return this.fb.group(formGroup);
  }

  // To map validations for a field
  mapValidations(validations: any) {
    // Array to store form validations
    const formValidations: any[] = [];

    if (validations && validations.isRequired) {
      // Add required validation to the array
      formValidations.push(Validators.required);
    }

    // Check if there is a pattern validation and add it to the array
    if (validations && validations.pattern) {
      formValidations.push(Validators.pattern(validations.pattern));
    }

    // Return the array of form validations
    return formValidations;
  }
}
