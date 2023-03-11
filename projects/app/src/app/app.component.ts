// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormlyModule,
    ReactiveFormsModule
  ]
})
export class AppComponent {
  form = new UntypedFormGroup({ });

  model = { email: 'email@gmail.com' };

  fields = [
    { 
      key:"email",
      type: "input",
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: false,
      }
    } as FormlyFieldConfig
  ]
}
