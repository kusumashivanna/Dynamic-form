import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormBuilderService } from '../service/form-builder.service';

@NgModule({
  declarations: [AppComponent, FormFieldComponent, DynamicFormComponent],
  imports: [BrowserModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [FormBuilderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
