// Copyright (c) Quinntyne Brown. All Rights Reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { InputFieldTypeComponent } from './app/input-field-type/input-field-type.component';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormlyModule.forRoot({
        types: [
          { name: 'input', component: InputFieldTypeComponent}
        ]
      }),
      RouterModule.forRoot([

      ]),     
    )
  ]
}).catch((err) => console.error(err));
