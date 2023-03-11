import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  templateUrl: './input-field-type.component.html',
  styleUrls: ['./input-field-type.component.scss']
})
export class InputFieldTypeComponent extends FieldType<FieldTypeConfig> { }
